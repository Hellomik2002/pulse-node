import { registerEnumType } from '@nestjs/graphql';

export enum ScheduleScalarFieldEnum {
    id = "id",
    userId = "userId",
    name = "name",
    timeZone = "timeZone"
}


registerEnumType(ScheduleScalarFieldEnum, { name: 'ScheduleScalarFieldEnum', description: undefined })
