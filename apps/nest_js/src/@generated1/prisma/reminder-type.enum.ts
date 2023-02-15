import { registerEnumType } from '@nestjs/graphql';

export enum ReminderType {
    PENDING_BOOKING_CONFIRMATION = "PENDING_BOOKING_CONFIRMATION"
}


registerEnumType(ReminderType, { name: 'ReminderType', description: undefined })
