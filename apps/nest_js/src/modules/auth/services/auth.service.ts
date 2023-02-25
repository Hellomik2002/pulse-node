import { PrismaService } from 'nestjs-prisma';
import { Prisma, PulseUser,  } from '@calcom/prisma_pulse/pulse_client';
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
		const user = await mainPrismaClient.pulseUser.create({
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

	async login(
		uniqueName: string,
		password: string,
	): Promise<{
		tokens: Token;
		user: PulseUser;
	}> {
		const user = await mainPrismaClient.pulseUser.findUnique({
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

		const tokens = this.generateTokens({
			userId: user.id,
		});

		return {
			tokens,
			user,
		};
	}

	validateUser(userId: string): Promise<PulseUser> {
		return mainPrismaClient.pulseUser.findUnique({ where: { id: userId } });
	}
	getUserFromPhoneNumber(phoneNumber: string): Promise<PulseUser> {
		return mainPrismaClient.pulseUser.findUnique({
			where: { phoneNumber },
		});
	}
	getUserFromToken(token: string): Promise<PulseUser> {
		const id = this.jwtService.decode(token)['userId'];
		return mainPrismaClient.pulseUser.findUnique({ where: { id } });
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
			secret: this.configService.get('JWT_ACCESS_SECRET'),
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
