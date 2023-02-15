import { registerEnumType } from '@nestjs/graphql';

export enum BookingStatus {
    CANCELLED = "CANCELLED",
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED",
    PENDING = "PENDING"
}


registerEnumType(BookingStatus, { name: 'BookingStatus', description: undefined })
