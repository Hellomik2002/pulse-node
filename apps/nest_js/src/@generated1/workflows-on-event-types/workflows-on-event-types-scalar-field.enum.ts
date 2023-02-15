import { registerEnumType } from '@nestjs/graphql';

export enum WorkflowsOnEventTypesScalarFieldEnum {
    id = "id",
    workflowId = "workflowId",
    eventTypeId = "eventTypeId"
}


registerEnumType(WorkflowsOnEventTypesScalarFieldEnum, { name: 'WorkflowsOnEventTypesScalarFieldEnum', description: undefined })
