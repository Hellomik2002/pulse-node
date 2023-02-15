import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AccountCountOrderByAggregateInput } from './account-count-order-by-aggregate.input';
import { AccountAvgOrderByAggregateInput } from './account-avg-order-by-aggregate.input';
import { AccountMaxOrderByAggregateInput } from './account-max-order-by-aggregate.input';
import { AccountMinOrderByAggregateInput } from './account-min-order-by-aggregate.input';
import { AccountSumOrderByAggregateInput } from './account-sum-order-by-aggregate.input';

@InputType()
export class AccountOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    providerAccountId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    refresh_token?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    access_token?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expires_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    token_type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    scope?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    id_token?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    session_state?: keyof typeof SortOrder;

    @Field(() => AccountCountOrderByAggregateInput, {nullable:true})
    _count?: AccountCountOrderByAggregateInput;

    @Field(() => AccountAvgOrderByAggregateInput, {nullable:true})
    _avg?: AccountAvgOrderByAggregateInput;

    @Field(() => AccountMaxOrderByAggregateInput, {nullable:true})
    _max?: AccountMaxOrderByAggregateInput;

    @Field(() => AccountMinOrderByAggregateInput, {nullable:true})
    _min?: AccountMinOrderByAggregateInput;

    @Field(() => AccountSumOrderByAggregateInput, {nullable:true})
    _sum?: AccountSumOrderByAggregateInput;
}
