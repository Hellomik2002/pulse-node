import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { randomUUID } from 'crypto';
import { calPrismaClient } from 'src/prisma/client_cal';
import { GqlAuthGuard } from 'src/modules/auth/tools/gql-auth.guard';
import { UserEntity } from 'src/modules/auth/tools/user.decorator';
import { User } from '@calcom/prisma_pulse';
import { mainPrismaClient } from 'src/prisma/main_client';
import { CreateBookingService } from 'src/modules/booking/services/create_booking.service';
import { Booking } from 'src/@generated1/booking/booking.model';

@Resolver()
export class CreateBookingResolver {
	constructor(private readonly createBookingService: CreateBookingService) {}

	@Mutation(() => Booking)
	@UseGuards(GqlAuthGuard)
	async createBooking(
		@Args('calUserId') calUserId: number,
		@Args('eventTypeId') eventTypeId: number,
		@Args('startTime') startTime1: Date,
		@UserEntity() { id: userId }: User,
	): Promise<Booking> {
		return this.createBookingService.createBokoing({
			calUserId: calUserId,
			eventTypeId: eventTypeId,
			startTime1: startTime1,
			userId: userId,
		});
	}

	@Mutation(() => Booking)
	async createBookingByUserId(
		@Args('calUserId') calUserId: number,
		@Args('eventTypeId') eventTypeId: number,
		@Args('startTime') startTime1: Date,
		@Args('userId') userId: string,
	): Promise<Booking> {
		return this.createBookingService.createBokoing({
			calUserId: calUserId,
			eventTypeId: eventTypeId,
			startTime1: startTime1,
			userId: userId,
		});
	}
}
