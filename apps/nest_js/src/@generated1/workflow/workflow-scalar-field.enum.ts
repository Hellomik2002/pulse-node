import { registerEnumType } from '@nestjs/graphql';

export enum WorkflowScalarFieldEnum {
    id = "id",
    name = "name",
    userId = "userId",
    trigger = "trigger",
    time = "time",
    timeUnit = "timeUnit"
}


registerEnumType(WorkflowScalarFieldEnum, { name: 'WorkflowScalarFieldEnum', description: undefined })
