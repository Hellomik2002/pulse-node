import { registerEnumType } from '@nestjs/graphql';

export enum WorkflowMethods {
    EMAIL = "EMAIL",
    SMS = "SMS"
}


registerEnumType(WorkflowMethods, { name: 'WorkflowMethods', description: undefined })
