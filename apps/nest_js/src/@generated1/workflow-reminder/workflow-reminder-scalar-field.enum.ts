import { registerEnumType } from '@nestjs/graphql';

export enum WorkflowReminderScalarFieldEnum {
    id = "id",
    bookingUid = "bookingUid",
    method = "method",
    scheduledDate = "scheduledDate",
    referenceId = "referenceId",
    scheduled = "scheduled",
    workflowStepId = "workflowStepId"
}


registerEnumType(WorkflowReminderScalarFieldEnum, { name: 'WorkflowReminderScalarFieldEnum', description: undefined })
