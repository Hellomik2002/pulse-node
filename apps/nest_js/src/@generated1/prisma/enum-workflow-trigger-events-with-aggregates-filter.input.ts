import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowTriggerEvents } from '../workflow/workflow-trigger-events.enum';
import { NestedEnumWorkflowTriggerEventsWithAggregatesFilter } from './nested-enum-workflow-trigger-events-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumWorkflowTriggerEventsFilter } from './nested-enum-workflow-trigger-events-filter.input';

@InputType()
export class EnumWorkflowTriggerEventsWithAggregatesFilter {

    @Field(() => WorkflowTriggerEvents, {nullable:true})
    equals?: keyof typeof WorkflowTriggerEvents;

    @Field(() => [WorkflowTriggerEvents], {nullable:true})
    in?: Array<keyof typeof WorkflowTriggerEvents>;

    @Field(() => [WorkflowTriggerEvents], {nullable:true})
    notIn?: Array<keyof typeof WorkflowTriggerEvents>;

    @Field(() => NestedEnumWorkflowTriggerEventsWithAggregatesFilter, {nullable:true})
    not?: NestedEnumWorkflowTriggerEventsWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumWorkflowTriggerEventsFilter, {nullable:true})
    _min?: NestedEnumWorkflowTriggerEventsFilter;

    @Field(() => NestedEnumWorkflowTriggerEventsFilter, {nullable:true})
    _max?: NestedEnumWorkflowTriggerEventsFilter;
}
