import { registerEnumType } from '@nestjs/graphql';

export enum BookingScalarFieldEnum {
    id = "id",
    uid = "uid",
    userId = "userId",
    eventTypeId = "eventTypeId",
    title = "title",
    description = "description",
    customInputs = "customInputs",
    startTime = "startTime",
    endTime = "endTime",
    location = "location",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    status = "status",
    paid = "paid",
    destinationCalendarId = "destinationCalendarId",
    cancellationReason = "cancellationReason",
    rejectionReason = "rejectionReason",
    dynamicEventSlugRef = "dynamicEventSlugRef",
    dynamicGroupSlugRef = "dynamicGroupSlugRef",
    rescheduled = "rescheduled",
    fromReschedule = "fromReschedule",
    recurringEventId = "recurringEventId",
    smsReminderNumber = "smsReminderNumber",
    scheduledJobs = "scheduledJobs",
    metadata = "metadata"
}


registerEnumType(BookingScalarFieldEnum, { name: 'BookingScalarFieldEnum', description: undefined })
