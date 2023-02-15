import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MembershipWhereInput } from './membership-where.input';
import { Type } from 'class-transformer';
import { MembershipOrderByWithRelationInput } from './membership-order-by-with-relation.input';
import { MembershipWhereUniqueInput } from './membership-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MembershipCountAggregateInput } from './membership-count-aggregate.input';
import { MembershipAvgAggregateInput } from './membership-avg-aggregate.input';
import { MembershipSumAggregateInput } from './membership-sum-aggregate.input';
import { MembershipMinAggregateInput } from './membership-min-aggregate.input';
import { MembershipMaxAggregateInput } from './membership-max-aggregate.input';

@ArgsType()
export class MembershipAggregateArgs {

    @Field(() => MembershipWhereInput, {nullable:true})
    @Type(() => MembershipWhereInput)
    where?: MembershipWhereInput;

    @Field(() => [MembershipOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MembershipOrderByWithRelationInput>;

    @Field(() => MembershipWhereUniqueInput, {nullable:true})
    cursor?: MembershipWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MembershipCountAggregateInput, {nullable:true})
    _count?: MembershipCountAggregateInput;

    @Field(() => MembershipAvgAggregateInput, {nullable:true})
    _avg?: MembershipAvgAggregateInput;

    @Field(() => MembershipSumAggregateInput, {nullable:true})
    _sum?: MembershipSumAggregateInput;

    @Field(() => MembershipMinAggregateInput, {nullable:true})
    _min?: MembershipMinAggregateInput;

    @Field(() => MembershipMaxAggregateInput, {nullable:true})
    _max?: MembershipMaxAggregateInput;
}
