import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EventTypeCustomInputCountOrderByAggregateInput } from './event-type-custom-input-count-order-by-aggregate.input';
import { EventTypeCustomInputAvgOrderByAggregateInput } from './event-type-custom-input-avg-order-by-aggregate.input';
import { EventTypeCustomInputMaxOrderByAggregateInput } from './event-type-custom-input-max-order-by-aggregate.input';
import { EventTypeCustomInputMinOrderByAggregateInput } from './event-type-custom-input-min-order-by-aggregate.input';
import { EventTypeCustomInputSumOrderByAggregateInput } from './event-type-custom-input-sum-order-by-aggregate.input';

@InputType()
export class EventTypeCustomInputOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventTypeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    label?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    options?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    required?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    placeholder?: keyof typeof SortOrder;

    @Field(() => EventTypeCustomInputCountOrderByAggregateInput, {nullable:true})
    _count?: EventTypeCustomInputCountOrderByAggregateInput;

    @Field(() => EventTypeCustomInputAvgOrderByAggregateInput, {nullable:true})
    _avg?: EventTypeCustomInputAvgOrderByAggregateInput;

    @Field(() => EventTypeCustomInputMaxOrderByAggregateInput, {nullable:true})
    _max?: EventTypeCustomInputMaxOrderByAggregateInput;

    @Field(() => EventTypeCustomInputMinOrderByAggregateInput, {nullable:true})
    _min?: EventTypeCustomInputMinOrderByAggregateInput;

    @Field(() => EventTypeCustomInputSumOrderByAggregateInput, {nullable:true})
    _sum?: EventTypeCustomInputSumOrderByAggregateInput;
}
