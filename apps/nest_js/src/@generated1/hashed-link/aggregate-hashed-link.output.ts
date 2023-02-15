import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HashedLinkCountAggregate } from './hashed-link-count-aggregate.output';
import { HashedLinkAvgAggregate } from './hashed-link-avg-aggregate.output';
import { HashedLinkSumAggregate } from './hashed-link-sum-aggregate.output';
import { HashedLinkMinAggregate } from './hashed-link-min-aggregate.output';
import { HashedLinkMaxAggregate } from './hashed-link-max-aggregate.output';

@ObjectType()
export class AggregateHashedLink {

    @Field(() => HashedLinkCountAggregate, {nullable:true})
    _count?: HashedLinkCountAggregate;

    @Field(() => HashedLinkAvgAggregate, {nullable:true})
    _avg?: HashedLinkAvgAggregate;

    @Field(() => HashedLinkSumAggregate, {nullable:true})
    _sum?: HashedLinkSumAggregate;

    @Field(() => HashedLinkMinAggregate, {nullable:true})
    _min?: HashedLinkMinAggregate;

    @Field(() => HashedLinkMaxAggregate, {nullable:true})
    _max?: HashedLinkMaxAggregate;
}
