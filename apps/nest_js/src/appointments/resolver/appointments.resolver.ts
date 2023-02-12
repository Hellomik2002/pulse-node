
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'nestjs-prisma';
import { AppointmentCreateInput } from 'src/@generated/appointment/appointment-create.input';
import { Appointment } from 'src/@generated/appointment/appointment.model';

import { mainPrismaClient } from 'src/prisma/main_client';

@Resolver()
export class AppointmentsResolver {
	// inject prisma service here
	private readonly prisma: PrismaService;

	@Query(() => [Appointment])
	async appointments(): Promise<Appointment[]> {
		return await mainPrismaClient.appointment.findMany({
			where: { authorId: '1' },
		});
	}

	@Mutation(() => Appointment)
	async createAppointment(
		@Args('create', { type: () => AppointmentCreateInput })
		args: AppointmentCreateInput,
	): Promise<Appointment> {
		return mainPrismaClient.appointment.create({ data: { ...args } });
	}
}
