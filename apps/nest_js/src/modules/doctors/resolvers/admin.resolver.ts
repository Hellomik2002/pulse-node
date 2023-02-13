import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { DoctorCreateInput } from 'src/@generated/doctor/doctor-create.input';
import { Doctor } from 'src/@generated/doctor/doctor.model';
import { PasswordService } from 'src/modules/auth/services/password.service';
import { mainPrismaClient } from 'src/prisma/main_client';

@Resolver()
export class AdminDoctor {
	constructor(private readonly passwordService: PasswordService) {}

	@Mutation(() => Doctor)
	async createDoctor(
		@Args('doctor') doctor: DoctorCreateInput,
	): Promise<Doctor> {
		const newDoctor = await mainPrismaClient.doctor.create({
			data: { ...doctor },
		});
		return newDoctor;
	}
}
