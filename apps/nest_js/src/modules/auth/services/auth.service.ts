import { PrismaService } from 'nestjs-prisma';
import { Prisma, User } from '@calcom/prisma_pulse/pulse_client';
import {
	Injectable,
	NotFoundException,
	BadRequestException,
	ConflictException,
	UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PasswordService } from './password.service';
import { SignupInput } from '../dto/signup.input';
import { SecurityConfig } from 'src/common/configs/config.interface';
import { Token } from '../models/token.model';
import { mainPrismaClient } from 'src/prisma/main_client';

@Injectable()
export class AuthService {
	constructor(
		private readonly jwtService: JwtService,

		private readonly passwordService: PasswordService,
		private readonly configService: ConfigService,
	) {}

	async createUser(payload: SignupInput): Promise<Token> {
		const hashedPassword = await this.passwordService.hashPassword(
			payload.password,
		);

		// try {
		const user = await mainPrismaClient.user.create({
			data: {
				...payload,
				password: hashedPassword,
				role: 'USER',
			},
		});

		return this.generateTokens({
			userId: user.id,
		});
		// } catch (e) {
		// 	if (
		// 		e instanceof Prisma.PrismaClientKnownRequestError &&
		// 		e.code === 'P2002'
		// 	) {
		// 		throw new ConflictException(
		// 			`UniqueName ${payload.uniqueName} already used.`,
		// 		);
		// 	}
		// 	throw new Error(e);
		// }
	}

	async login(uniqueName: string, password: string): Promise<Token> {
		const user = await mainPrismaClient.user.findUnique({
			where: { uniqueName },
		});

		if (!user) {
			throw new NotFoundException(
				`No user found for uniqueName: ${uniqueName}`,
			);
		}

		const passwordValid = await this.passwordService.validatePassword(
			password,
			user.password,
		);

		if (!passwordValid) {
			throw new BadRequestException('Invalid password');
		}

		return this.generateTokens({
			userId: user.id,
		});
	}

	validateUser(userId: string): Promise<User> {
		return mainPrismaClient.user.findUnique({ where: { id: userId } });
	}
	getUserFromPhoneNumber(phoneNumber: string): Promise<User> {
		return mainPrismaClient.user.findUnique({ where: { phoneNumber } });
	}
	getUserFromToken(token: string): Promise<User> {
		const id = this.jwtService.decode(token)['userId'];
		return mainPrismaClient.user.findUnique({ where: { id } });
	}

	generateTokens(payload: { userId: string }): Token {
		return {
			accessToken: this.generateAccessToken(payload),
			refreshToken: this.generateRefreshToken(payload),
		};
	}

	private generateAccessToken(payload: { userId: string }): string {
		const securityConfig =
			this.configService.get<SecurityConfig>('security');
		return this.jwtService.sign(payload, {
			secret: this.configService.get('JWT_REFRESH_SECRET'),
			expiresIn: securityConfig.expiresIn,
		});
	}

	private generateRefreshToken(payload: { userId: string }): string {
		const securityConfig =
			this.configService.get<SecurityConfig>('security');
		return this.jwtService.sign(payload, {
			secret: this.configService.get('JWT_REFRESH_SECRET'),
			expiresIn: securityConfig.refreshIn,
		});
	}

	refreshToken(token: string) {
		try {
			const { userId } = this.jwtService.verify(token, {
				secret: this.configService.get('JWT_REFRESH_SECRET'),
			});

			return this.generateTokens({
				userId,
			});
		} catch (e) {
			throw new UnauthorizedException();
		}
	}
}
