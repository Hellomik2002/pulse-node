import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MembershipCountOrderByAggregateInput } from './membership-count-order-by-aggregate.input';
import { MembershipAvgOrderByAggregateInput } from './membership-avg-order-by-aggregate.input';
import { MembershipMaxOrderByAggregateInput } from './membership-max-order-by-aggregate.input';
import { MembershipMinOrderByAggregateInput } from './membership-min-order-by-aggregate.input';
import { MembershipSumOrderByAggregateInput } from './membership-sum-order-by-aggregate.input';

@InputType()
export class MembershipOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    teamId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accepted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    disableImpersonation?: keyof typeof SortOrder;

    @Field(() => MembershipCountOrderByAggregateInput, {nullable:true})
    _count?: MembershipCountOrderByAggregateInput;

    @Field(() => MembershipAvgOrderByAggregateInput, {nullable:true})
    _avg?: MembershipAvgOrderByAggregateInput;

    @Field(() => MembershipMaxOrderByAggregateInput, {nullable:true})
    _max?: MembershipMaxOrderByAggregateInput;

    @Field(() => MembershipMinOrderByAggregateInput, {nullable:true})
    _min?: MembershipMinOrderByAggregateInput;

    @Field(() => MembershipSumOrderByAggregateInput, {nullable:true})
    _sum?: MembershipSumOrderByAggregateInput;
}
