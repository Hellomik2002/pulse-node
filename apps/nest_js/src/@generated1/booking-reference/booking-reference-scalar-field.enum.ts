import { registerEnumType } from '@nestjs/graphql';

export enum BookingReferenceScalarFieldEnum {
    id = "id",
    type = "type",
    uid = "uid",
    meetingId = "meetingId",
    meetingPassword = "meetingPassword",
    meetingUrl = "meetingUrl",
    bookingId = "bookingId",
    externalCalendarId = "externalCalendarId",
    deleted = "deleted",
    credentialId = "credentialId"
}


registerEnumType(BookingReferenceScalarFieldEnum, { name: 'BookingReferenceScalarFieldEnum', description: undefined })
