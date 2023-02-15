import { registerEnumType } from '@nestjs/graphql';

export enum WorkflowTriggerEvents {
    BEFORE_EVENT = "BEFORE_EVENT",
    EVENT_CANCELLED = "EVENT_CANCELLED",
    NEW_EVENT = "NEW_EVENT",
    AFTER_EVENT = "AFTER_EVENT",
    RESCHEDULE_EVENT = "RESCHEDULE_EVENT"
}


registerEnumType(WorkflowTriggerEvents, { name: 'WorkflowTriggerEvents', description: undefined })
