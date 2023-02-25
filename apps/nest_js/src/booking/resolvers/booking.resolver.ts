import { Args, Query, Resolver } from '@nestjs/graphql';
import { Booking } from 'src/@generated1/booking/booking.model';
import { calPrismaClient } from 'src/prisma/client_cal';

@Resolver()
export class BookingResolver {
  @Query(() => [Booking])
  async bookingsByUser(@Args("userId") userId: string) {
    const bookings = calPrismaClient.booking.findMany({where: {
      metadata: {
        path: ["pulseUserId"],
        equals: userId
      }
    },include: {
      user: true,
      eventType: true
    }})
    return bookings;
  }
}
