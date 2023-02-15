import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MembershipCountAggregate } from './membership-count-aggregate.output';
import { MembershipAvgAggregate } from './membership-avg-aggregate.output';
import { MembershipSumAggregate } from './membership-sum-aggregate.output';
import { MembershipMinAggregate } from './membership-min-aggregate.output';
import { MembershipMaxAggregate } from './membership-max-aggregate.output';

@ObjectType()
export class AggregateMembership {

    @Field(() => MembershipCountAggregate, {nullable:true})
    _count?: MembershipCountAggregate;

    @Field(() => MembershipAvgAggregate, {nullable:true})
    _avg?: MembershipAvgAggregate;

    @Field(() => MembershipSumAggregate, {nullable:true})
    _sum?: MembershipSumAggregate;

    @Field(() => MembershipMinAggregate, {nullable:true})
    _min?: MembershipMinAggregate;

    @Field(() => MembershipMaxAggregate, {nullable:true})
    _max?: MembershipMaxAggregate;
}
