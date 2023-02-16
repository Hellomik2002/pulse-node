import { Module } from '@nestjs/common';
import { CreateBookingResolver } from 'src/modules/booking/resolvers/create_booking.resovler';

@Module({
	providers: [CreateBookingResolver],
})
export class BookingModel {}
