import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WorkflowsOnEventTypesCountAggregate } from './workflows-on-event-types-count-aggregate.output';
import { WorkflowsOnEventTypesAvgAggregate } from './workflows-on-event-types-avg-aggregate.output';
import { WorkflowsOnEventTypesSumAggregate } from './workflows-on-event-types-sum-aggregate.output';
import { WorkflowsOnEventTypesMinAggregate } from './workflows-on-event-types-min-aggregate.output';
import { WorkflowsOnEventTypesMaxAggregate } from './workflows-on-event-types-max-aggregate.output';

@ObjectType()
export class AggregateWorkflowsOnEventTypes {

    @Field(() => WorkflowsOnEventTypesCountAggregate, {nullable:true})
    _count?: WorkflowsOnEventTypesCountAggregate;

    @Field(() => WorkflowsOnEventTypesAvgAggregate, {nullable:true})
    _avg?: WorkflowsOnEventTypesAvgAggregate;

    @Field(() => WorkflowsOnEventTypesSumAggregate, {nullable:true})
    _sum?: WorkflowsOnEventTypesSumAggregate;

    @Field(() => WorkflowsOnEventTypesMinAggregate, {nullable:true})
    _min?: WorkflowsOnEventTypesMinAggregate;

    @Field(() => WorkflowsOnEventTypesMaxAggregate, {nullable:true})
    _max?: WorkflowsOnEventTypesMaxAggregate;
}
