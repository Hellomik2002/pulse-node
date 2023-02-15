import { registerEnumType } from '@nestjs/graphql';

export enum WorkflowTemplates {
    REMINDER = "REMINDER",
    CUSTOM = "CUSTOM"
}


registerEnumType(WorkflowTemplates, { name: 'WorkflowTemplates', description: undefined })
