import { Module } from '@nestjs/common';
import { BookingResolver } from './resolvers/booking.resolver';

@Module({
	providers: [BookingResolver],
})
export class BookingModule {}
