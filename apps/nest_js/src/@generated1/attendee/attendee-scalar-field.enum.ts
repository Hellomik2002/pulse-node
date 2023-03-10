import { registerEnumType } from '@nestjs/graphql';

export enum AttendeeScalarFieldEnum {
    id = "id",
    email = "email",
    name = "name",
    timeZone = "timeZone",
    locale = "locale",
    bookingId = "bookingId"
}


registerEnumType(AttendeeScalarFieldEnum, { name: 'AttendeeScalarFieldEnum', description: undefined })
