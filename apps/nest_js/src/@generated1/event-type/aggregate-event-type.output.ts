import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EventTypeCountAggregate } from './event-type-count-aggregate.output';
import { EventTypeAvgAggregate } from './event-type-avg-aggregate.output';
import { EventTypeSumAggregate } from './event-type-sum-aggregate.output';
import { EventTypeMinAggregate } from './event-type-min-aggregate.output';
import { EventTypeMaxAggregate } from './event-type-max-aggregate.output';

@ObjectType()
export class AggregateEventType {

    @Field(() => EventTypeCountAggregate, {nullable:true})
    _count?: EventTypeCountAggregate;

    @Field(() => EventTypeAvgAggregate, {nullable:true})
    _avg?: EventTypeAvgAggregate;

    @Field(() => EventTypeSumAggregate, {nullable:true})
    _sum?: EventTypeSumAggregate;

    @Field(() => EventTypeMinAggregate, {nullable:true})
    _min?: EventTypeMinAggregate;

    @Field(() => EventTypeMaxAggregate, {nullable:true})
    _max?: EventTypeMaxAggregate;
}
