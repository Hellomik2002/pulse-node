import { registerEnumType } from '@nestjs/graphql';

export enum WorkflowActions {
    EMAIL_HOST = "EMAIL_HOST",
    EMAIL_ATTENDEE = "EMAIL_ATTENDEE",
    SMS_ATTENDEE = "SMS_ATTENDEE",
    SMS_NUMBER = "SMS_NUMBER",
    EMAIL_ADDRESS = "EMAIL_ADDRESS"
}


registerEnumType(WorkflowActions, { name: 'WorkflowActions', description: undefined })
