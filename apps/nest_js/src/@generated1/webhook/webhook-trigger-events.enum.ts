import { registerEnumType } from '@nestjs/graphql';

export enum WebhookTriggerEvents {
    BOOKING_CREATED = "BOOKING_CREATED",
    BOOKING_RESCHEDULED = "BOOKING_RESCHEDULED",
    BOOKING_CANCELLED = "BOOKING_CANCELLED",
    FORM_SUBMITTED = "FORM_SUBMITTED",
    MEETING_ENDED = "MEETING_ENDED"
}


registerEnumType(WebhookTriggerEvents, { name: 'WebhookTriggerEvents', description: undefined })
