import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HashedLinkCountOrderByAggregateInput } from './hashed-link-count-order-by-aggregate.input';
import { HashedLinkAvgOrderByAggregateInput } from './hashed-link-avg-order-by-aggregate.input';
import { HashedLinkMaxOrderByAggregateInput } from './hashed-link-max-order-by-aggregate.input';
import { HashedLinkMinOrderByAggregateInput } from './hashed-link-min-order-by-aggregate.input';
import { HashedLinkSumOrderByAggregateInput } from './hashed-link-sum-order-by-aggregate.input';

@InputType()
export class HashedLinkOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    link?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventTypeId?: keyof typeof SortOrder;

    @Field(() => HashedLinkCountOrderByAggregateInput, {nullable:true})
    _count?: HashedLinkCountOrderByAggregateInput;

    @Field(() => HashedLinkAvgOrderByAggregateInput, {nullable:true})
    _avg?: HashedLinkAvgOrderByAggregateInput;

    @Field(() => HashedLinkMaxOrderByAggregateInput, {nullable:true})
    _max?: HashedLinkMaxOrderByAggregateInput;

    @Field(() => HashedLinkMinOrderByAggregateInput, {nullable:true})
    _min?: HashedLinkMinOrderByAggregateInput;

    @Field(() => HashedLinkSumOrderByAggregateInput, {nullable:true})
    _sum?: HashedLinkSumOrderByAggregateInput;
}
