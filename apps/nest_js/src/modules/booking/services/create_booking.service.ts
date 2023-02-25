import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { use } from 'passport';
import { calPrismaClient } from 'src/prisma/client_cal';
import { mainPrismaClient } from 'src/prisma/main_client';

@Injectable()
export class CreateBookingService {
	async createBokoing({
		calUserId,
		eventTypeId,
		startTime1,
		userId,
	}: {
		calUserId: number;
		eventTypeId: number;
		startTime1: Date;
		userId: string;
	}) {
		const [user, eventType] = await Promise.all([
			mainPrismaClient.user.findUnique({
				where: {
					id: userId.toString(),
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
		const booking = await calPrismaClient.$transaction(async tx => {
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

			return await tx.booking.create({
				data: {
					startTime: startTime1,
					endTime: endTime1,
					title: eventType.title,
					uid: randomUUID(),
					userId: calUserId,
					eventTypeId: eventTypeId,
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

		return booking;
	}
}
