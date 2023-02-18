import { Field, ObjectType } from '@nestjs/graphql';
import { Doctor } from 'src/@generated/doctor/doctor.model';
import { Booking } from 'src/@generated1/booking/booking.model';

@ObjectType()
export class GetBookingType {
	@Field(() => [Booking])
	bookings: Booking[];

	@Field(() => [Doctor])
	doctors: Doctor[];
}
