import { registerEnumType } from '@nestjs/graphql';

export enum WorkflowStepScalarFieldEnum {
    id = "id",
    stepNumber = "stepNumber",
    action = "action",
    workflowId = "workflowId",
    sendTo = "sendTo",
    reminderBody = "reminderBody",
    emailSubject = "emailSubject",
    template = "template",
    numberRequired = "numberRequired",
    sender = "sender",
    numberVerificationPending = "numberVerificationPending"
}


registerEnumType(WorkflowStepScalarFieldEnum, { name: 'WorkflowStepScalarFieldEnum', description: undefined })
