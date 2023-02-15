import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ApiKeyCountOrderByAggregateInput } from './api-key-count-order-by-aggregate.input';
import { ApiKeyAvgOrderByAggregateInput } from './api-key-avg-order-by-aggregate.input';
import { ApiKeyMaxOrderByAggregateInput } from './api-key-max-order-by-aggregate.input';
import { ApiKeyMinOrderByAggregateInput } from './api-key-min-order-by-aggregate.input';
import { ApiKeySumOrderByAggregateInput } from './api-key-sum-order-by-aggregate.input';

@InputType()
export class ApiKeyOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    note?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expiresAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastUsedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hashedKey?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    appId?: keyof typeof SortOrder;

    @Field(() => ApiKeyCountOrderByAggregateInput, {nullable:true})
    _count?: ApiKeyCountOrderByAggregateInput;

    @Field(() => ApiKeyAvgOrderByAggregateInput, {nullable:true})
    _avg?: ApiKeyAvgOrderByAggregateInput;

    @Field(() => ApiKeyMaxOrderByAggregateInput, {nullable:true})
    _max?: ApiKeyMaxOrderByAggregateInput;

    @Field(() => ApiKeyMinOrderByAggregateInput, {nullable:true})
    _min?: ApiKeyMinOrderByAggregateInput;

    @Field(() => ApiKeySumOrderByAggregateInput, {nullable:true})
    _sum?: ApiKeySumOrderByAggregateInput;
}
