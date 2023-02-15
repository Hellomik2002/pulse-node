import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowTriggerEvents } from '../workflow/workflow-trigger-events.enum';

@InputType()
export class NestedEnumWorkflowTriggerEventsFilter {

    @Field(() => WorkflowTriggerEvents, {nullable:true})
    equals?: keyof typeof WorkflowTriggerEvents;

    @Field(() => [WorkflowTriggerEvents], {nullable:true})
    in?: Array<keyof typeof WorkflowTriggerEvents>;

    @Field(() => [WorkflowTriggerEvents], {nullable:true})
    notIn?: Array<keyof typeof WorkflowTriggerEvents>;

    @Field(() => NestedEnumWorkflowTriggerEventsFilter, {nullable:true})
    not?: NestedEnumWorkflowTriggerEventsFilter;
}
