import { registerEnumType } from '@nestjs/graphql';

export enum EventTypeScalarFieldEnum {
    id = "id",
    title = "title",
    slug = "slug",
    description = "description",
    position = "position",
    locations = "locations",
    length = "length",
    hidden = "hidden",
    userId = "userId",
    teamId = "teamId",
    eventName = "eventName",
    timeZone = "timeZone",
    periodType = "periodType",
    periodStartDate = "periodStartDate",
    periodEndDate = "periodEndDate",
    periodDays = "periodDays",
    periodCountCalendarDays = "periodCountCalendarDays",
    requiresConfirmation = "requiresConfirmation",
    recurringEvent = "recurringEvent",
    disableGuests = "disableGuests",
    hideCalendarNotes = "hideCalendarNotes",
    minimumBookingNotice = "minimumBookingNotice",
    beforeEventBuffer = "beforeEventBuffer",
    afterEventBuffer = "afterEventBuffer",
    seatsPerTimeSlot = "seatsPerTimeSlot",
    seatsShowAttendees = "seatsShowAttendees",
    schedulingType = "schedulingType",
    scheduleId = "scheduleId",
    price = "price",
    currency = "currency",
    slotInterval = "slotInterval",
    metadata = "metadata",
    successRedirectUrl = "successRedirectUrl",
    bookingLimits = "bookingLimits"
}


registerEnumType(EventTypeScalarFieldEnum, { name: 'EventTypeScalarFieldEnum', description: undefined })
