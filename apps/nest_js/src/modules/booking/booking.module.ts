import { Module } from '@nestjs/common';
import { CreateBookingResolver } from 'src/modules/booking/resolvers/create_booking.resolver';
import { GetMyBookingResolver } from './resolvers/get_my_booking.resolver';
import { CreateBookingService } from './services/create_booking.service';

@Module({
	providers: [
		CreateBookingResolver,
		CreateBookingService,
		GetMyBookingResolver,
	],
})
export class BookingModule {}
