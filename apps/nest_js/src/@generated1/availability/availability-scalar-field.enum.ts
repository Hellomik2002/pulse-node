import { registerEnumType } from '@nestjs/graphql';

export enum AvailabilityScalarFieldEnum {
    id = "id",
    userId = "userId",
    eventTypeId = "eventTypeId",
    days = "days",
    startTime = "startTime",
    endTime = "endTime",
    date = "date",
    scheduleId = "scheduleId"
}


registerEnumType(AvailabilityScalarFieldEnum, { name: 'AvailabilityScalarFieldEnum', description: undefined })
