import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Booking } from 'src/@generated1/booking/booking.model';
import { GqlAuthGuard } from 'src/modules/auth/tools/gql-auth.guard';
import { UserEntity } from 'src/modules/auth/tools/user.decorator';
import { mainPrismaClient } from 'src/prisma/main_client';
import { calPrismaClient } from 'src/prisma/client_cal';
import { GetBookingType } from '../model/get_booking.type';
import { PulseUser } from '@calcom/prisma_pulse';

export class GetMyBookingResolver {
	@Query(() => [Booking])
	async bookingsByUser(@Args('userId') userId: string) {
		const bookings = calPrismaClient.booking.findMany({
			where: {
				metadata: {
					path: ['pulseUserId'],
					equals: userId,
				},
			},
			include: {
				user: true,
				eventType: true,
			},
		});
		return bookings;
	}

	@Query(() => GetBookingType)
	@UseGuards(GqlAuthGuard)
	async getMyBookings(@UserEntity() user: PulseUser): Promise<GetBookingType> {
		const bookings = await calPrismaClient.booking.findMany({
			where: {
				metadata: {
					path: ['pulseUserId'],
					equals: user.id,
				},
			},
			orderBy: {
				startTime: 'asc',
			},
			include: {
				user: true,
				eventType: true,
			},
		});
		const set = new Set<number>();
		bookings.forEach(e => {
			if (e.userId != null) set.add(e.userId);
		});

		const doctors = await mainPrismaClient.doctor.findMany({
			where: {
				calUserId: {
					in: [...set],
				},
			},
			include: {
				user: true,
				specializations: true,
			},
		});

		return { bookings, doctors };
	}
}
