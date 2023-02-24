import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { randomUUID } from 'crypto';
import { calPrismaClient } from 'src/prisma/client_cal';
import { GqlAuthGuard } from 'src/modules/auth/tools/gql-auth.guard';
import { UserEntity } from 'src/modules/auth/tools/user.decorator';
import { PulseUser } from '@calcom/prisma_pulse';
import { mainPrismaClient } from 'src/prisma/main_client';

@Resolver()
export class CreateBookingResolver {
	@Mutation()
	@UseGuards(GqlAuthGuard)
	async createBooking(
		@Args('calUserId') calUserId: number,
		@Args('eventTypeId') eventTypeId: number,
		@Args('startTime') startTime1: Date,
		@UserEntity() { id: userId }: PulseUser,
	) {
		const [user, eventType] = await Promise.all([
			mainPrismaClient.pulseUser.findUnique({
				where: {
					id: userId,
				},
			}),
			calPrismaClient.eventType.findUnique({
				where: {
					id: eventTypeId,
				},
			}),
		]);

		const endTime1 = new Date(
			startTime1.getTime() + 1000 * 60 * eventType.length,
		);
		calPrismaClient.$transaction(async tx => {
			const bookings = await tx.booking.findMany({
				where: {
					userId: calUserId,
					endTime: {
						gte: new Date(),
					},
				},
			});
			for (const singlBook of bookings) {
				const startTime = singlBook.startTime;
				const endTime = singlBook.endTime;
				if (startTime <= startTime1 && startTime1 < endTime) {
					throw 'Booking is not available';
				}
				if (startTime < endTime1 && endTime1 <= endTime) {
					throw 'Booking is not available';
				}
				if (startTime1 <= startTime && startTime < endTime1) {
					throw 'Booking is not available';
				}
				if (startTime1 < endTime && endTime <= endTime1) {
					throw 'Booking is not available';
				}
			}

			await tx.booking.create({
				data: {
					startTime: startTime1,
					endTime: endTime1,
					title: eventType.title,
					uid: randomUUID(),
					attendees: {
						create: {
							email: user.email,
							name: user.fullName,
							timeZone: 'Asia/Almaty',
						},
					},
				},
			});
		});
	}

	@Mutation()
	async createBookingByUserId(
		@Args('calUserId') calUserId: number,
		@Args('eventTypeId') eventTypeId: number,
		@Args('startTime') startTime1: Date,
		@Args('userId') userId: string,
	) {
		const [user, eventType] = await Promise.all([
			mainPrismaClient.pulseUser.findUnique({
				where: {
					id: userId,
				},
			}),
			calPrismaClient.eventType.findUnique({
				where: {
					id: eventTypeId,
				},
			}),
		]);

		const endTime1 = new Date(
			startTime1.getTime() + 1000 * 60 * eventType.length,
		);
		calPrismaClient.$transaction(async tx => {
			const bookings = await tx.booking.findMany({
				where: {
					userId: calUserId,
					endTime: {
						gte: new Date(),
					},
				},
			});
			for (const singlBook of bookings) {
				const startTime = singlBook.startTime;
				const endTime = singlBook.endTime;
				if (startTime <= startTime1 && startTime1 < endTime) {
					throw 'Booking is not available';
				}
				if (startTime < endTime1 && endTime1 <= endTime) {
					throw 'Booking is not available';
				}
				if (startTime1 <= startTime && startTime < endTime1) {
					throw 'Booking is not available';
				}
				if (startTime1 < endTime && endTime <= endTime1) {
					throw 'Booking is not available';
				}
			}

			await tx.booking.create({
				data: {
					startTime: startTime1,
					endTime: endTime1,
					title: eventType.title,
					uid: randomUUID(),
					attendees: {
						create: {
							email: user.email,
							name: user.fullName,
							timeZone: 'Asia/Almaty',
						},
					},
				},
			});
		});
	}
}
