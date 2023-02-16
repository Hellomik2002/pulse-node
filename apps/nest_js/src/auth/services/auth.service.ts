import { PrismaService } from 'nestjs-prisma';
import { mainPrismaClient} from 'src/prisma/main_client';
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
import { SecurityConfig } from 'src/common/configs/config.interface';
import { Token } from '../models/token.model';
import { UserCreateInput } from 'src/@generated/user/user-create.input';
import { CalComAccountManagerService } from 'src/cal-com/cal-com-account-manager/cal-com-account-manager.service';
import { CalComAccountSignUpDto } from 'src/cal-com/cal-com-account-manager/dto/createCalAccountDto';
import { Prisma } from '@prisma/client';
import { User } from '@calcom/prisma_pulse';

type AuthResponse = Token & { user: User };

@Injectable()
export class AuthService {
	constructor(
		private readonly jwtService: JwtService,
		private readonly prisma: PrismaService,
		private readonly passwordService: PasswordService,
		private readonly configService: ConfigService,
		private readonly calcomAccountManagerService: CalComAccountManagerService,
	) {}

	async createUser(payload: UserCreateInput): Promise<AuthResponse> {
		const hashedPassword = await this.passwordService.hashPassword(
			payload.password,
		);

		try {
			const user = await mainPrismaClient.user.create({
				data: {
					...payload,
					password: hashedPassword,
					role: 'USER',
				},
			});

			return {
				...this.generateTokens({
					userId: user.id,
				}),
				user,
			};
		} catch (e) {
			if (
				e instanceof Prisma.PrismaClientKnownRequestError &&
				e.code === 'P2002'
			) {
				throw new ConflictException(
					`UniqueName ${payload.uniqueName} already used.`,
				);
			}
			throw new Error(e);
		}
	}

	async createDoctor(payload: UserCreateInput): Promise<AuthResponse> {
		const hashedPassword = await this.passwordService.hashPassword(
			payload.password,
		);

		try {
			const user = await mainPrismaClient.user.create({
				data: {
					...payload,
					password: hashedPassword,
					role: 'DOCTOR',
				},
			});

			const calcomAccountCreationDto: CalComAccountSignUpDto = {
				email: user.email,
				username: user.uniqueName,
				password: payload.password,
			};
			try {
				const res =
					await this.calcomAccountManagerService.createCalAccount(
						calcomAccountCreationDto,
					);
				console.log(res);
			} catch (e) {
				console.log(e);
			}

			return {
				...this.generateTokens({
					userId: user.id,
				}),
				user,
			};
		} catch (e) {
			if (
				e instanceof Prisma.PrismaClientKnownRequestError &&
				e.code === 'P2002'
			) {
				throw new ConflictException(
					`UniqueName ${payload.uniqueName} already used.`,
				);
			}
			throw new Error(e);
		}
	}

	async login(uniqueName: string, password: string): Promise<AuthResponse> {
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

		return {
			...this.generateTokens({
				userId: user.id,
			}),
			user,
		};
	}

	validateUser(userId: string): Promise<User> {
		return mainPrismaClient.user.findUnique({ where: { id: userId } });
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
		return this.jwtService.sign(payload);
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
