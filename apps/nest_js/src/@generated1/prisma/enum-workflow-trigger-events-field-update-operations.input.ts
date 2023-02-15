import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowTriggerEvents } from '../workflow/workflow-trigger-events.enum';

@InputType()
export class EnumWorkflowTriggerEventsFieldUpdateOperationsInput {

    @Field(() => WorkflowTriggerEvents, {nullable:true})
    set?: keyof typeof WorkflowTriggerEvents;
}
