import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MembershipWhereInput } from './membership-where.input';
import { Type } from 'class-transformer';
import { MembershipOrderByWithAggregationInput } from './membership-order-by-with-aggregation.input';
import { MembershipScalarFieldEnum } from './membership-scalar-field.enum';
import { MembershipScalarWhereWithAggregatesInput } from './membership-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MembershipCountAggregateInput } from './membership-count-aggregate.input';
import { MembershipAvgAggregateInput } from './membership-avg-aggregate.input';
import { MembershipSumAggregateInput } from './membership-sum-aggregate.input';
import { MembershipMinAggregateInput } from './membership-min-aggregate.input';
import { MembershipMaxAggregateInput } from './membership-max-aggregate.input';

@ArgsType()
export class MembershipGroupByArgs {

    @Field(() => MembershipWhereInput, {nullable:true})
    @Type(() => MembershipWhereInput)
    where?: MembershipWhereInput;

    @Field(() => [MembershipOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MembershipOrderByWithAggregationInput>;

    @Field(() => [MembershipScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MembershipScalarFieldEnum>;

    @Field(() => MembershipScalarWhereWithAggregatesInput, {nullable:true})
    having?: MembershipScalarWhereWithAggregatesInput;

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
