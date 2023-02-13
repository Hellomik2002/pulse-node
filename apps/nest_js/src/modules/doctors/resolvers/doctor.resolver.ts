import { Mutation, Resolver, Query } from '@nestjs/graphql';
import { Doctor } from 'src/@generated/doctor/doctor.model';
import { mainPrismaClient } from 'src/prisma/main_client';

@Resolver()
export class DoctorResolver {
	@Query(() => [Doctor])
	async getDoctors(): Promise<Doctor[]> {
		const doctors = await mainPrismaClient.doctor.findMany({
			include: {
				user: true,
				specializations: true,
			},
		});
		return doctors;
	}
}
