import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EventTypeCustomInputCountAggregate } from './event-type-custom-input-count-aggregate.output';
import { EventTypeCustomInputAvgAggregate } from './event-type-custom-input-avg-aggregate.output';
import { EventTypeCustomInputSumAggregate } from './event-type-custom-input-sum-aggregate.output';
import { EventTypeCustomInputMinAggregate } from './event-type-custom-input-min-aggregate.output';
import { EventTypeCustomInputMaxAggregate } from './event-type-custom-input-max-aggregate.output';

@ObjectType()
export class AggregateEventTypeCustomInput {

    @Field(() => EventTypeCustomInputCountAggregate, {nullable:true})
    _count?: EventTypeCustomInputCountAggregate;

    @Field(() => EventTypeCustomInputAvgAggregate, {nullable:true})
    _avg?: EventTypeCustomInputAvgAggregate;

    @Field(() => EventTypeCustomInputSumAggregate, {nullable:true})
    _sum?: EventTypeCustomInputSumAggregate;

    @Field(() => EventTypeCustomInputMinAggregate, {nullable:true})
    _min?: EventTypeCustomInputMinAggregate;

    @Field(() => EventTypeCustomInputMaxAggregate, {nullable:true})
    _max?: EventTypeCustomInputMaxAggregate;
}
