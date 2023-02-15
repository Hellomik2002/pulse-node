import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FeedbackCountOrderByAggregateInput } from './feedback-count-order-by-aggregate.input';
import { FeedbackAvgOrderByAggregateInput } from './feedback-avg-order-by-aggregate.input';
import { FeedbackMaxOrderByAggregateInput } from './feedback-max-order-by-aggregate.input';
import { FeedbackMinOrderByAggregateInput } from './feedback-min-order-by-aggregate.input';
import { FeedbackSumOrderByAggregateInput } from './feedback-sum-order-by-aggregate.input';

@InputType()
export class FeedbackOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    comment?: keyof typeof SortOrder;

    @Field(() => FeedbackCountOrderByAggregateInput, {nullable:true})
    _count?: FeedbackCountOrderByAggregateInput;

    @Field(() => FeedbackAvgOrderByAggregateInput, {nullable:true})
    _avg?: FeedbackAvgOrderByAggregateInput;

    @Field(() => FeedbackMaxOrderByAggregateInput, {nullable:true})
    _max?: FeedbackMaxOrderByAggregateInput;

    @Field(() => FeedbackMinOrderByAggregateInput, {nullable:true})
    _min?: FeedbackMinOrderByAggregateInput;

    @Field(() => FeedbackSumOrderByAggregateInput, {nullable:true})
    _sum?: FeedbackSumOrderByAggregateInput;
}
