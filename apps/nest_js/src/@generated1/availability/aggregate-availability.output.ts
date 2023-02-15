import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AvailabilityCountAggregate } from './availability-count-aggregate.output';
import { AvailabilityAvgAggregate } from './availability-avg-aggregate.output';
import { AvailabilitySumAggregate } from './availability-sum-aggregate.output';
import { AvailabilityMinAggregate } from './availability-min-aggregate.output';
import { AvailabilityMaxAggregate } from './availability-max-aggregate.output';

@ObjectType()
export class AggregateAvailability {

    @Field(() => AvailabilityCountAggregate, {nullable:true})
    _count?: AvailabilityCountAggregate;

    @Field(() => AvailabilityAvgAggregate, {nullable:true})
    _avg?: AvailabilityAvgAggregate;

    @Field(() => AvailabilitySumAggregate, {nullable:true})
    _sum?: AvailabilitySumAggregate;

    @Field(() => AvailabilityMinAggregate, {nullable:true})
    _min?: AvailabilityMinAggregate;

    @Field(() => AvailabilityMaxAggregate, {nullable:true})
    _max?: AvailabilityMaxAggregate;
}
