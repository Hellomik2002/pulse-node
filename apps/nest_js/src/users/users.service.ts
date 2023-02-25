import { PrismaService } from 'nestjs-prisma';
import { Injectable, BadRequestException } from '@nestjs/common';

import { ChangePasswordInput } from './dto/change-password.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PasswordService } from 'src/modules/auth/services/password.service';
import { mainPrismaClient } from 'src/prisma/main_client';

@Injectable()
export class UsersService {
	constructor(private passwordService: PasswordService) {}

	updateUser(userId: string, newUserData: UpdateUserInput) {
		return mainPrismaClient.pulseUser.update({
			data: newUserData,
			where: {
				id: userId,
			},
		});
	}

	async changePassword(
		userId: string,
		userPassword: string,
		changePassword: ChangePasswordInput,
	) {
		const passwordValid = await this.passwordService.validatePassword(
			changePassword.oldPassword,
			userPassword,
		);

		if (!passwordValid) {
			throw new BadRequestException('Invalid password');
		}

		const hashedPassword = await this.passwordService.hashPassword(
			changePassword.newPassword,
		);

		return mainPrismaClient.pulseUser.update({
			data: {
				password: hashedPassword,
			},
			where: { id: userId },
		});
	}
}
