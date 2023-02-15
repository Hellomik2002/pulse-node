import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SelectedCalendarCountOrderByAggregateInput } from './selected-calendar-count-order-by-aggregate.input';
import { SelectedCalendarAvgOrderByAggregateInput } from './selected-calendar-avg-order-by-aggregate.input';
import { SelectedCalendarMaxOrderByAggregateInput } from './selected-calendar-max-order-by-aggregate.input';
import { SelectedCalendarMinOrderByAggregateInput } from './selected-calendar-min-order-by-aggregate.input';
import { SelectedCalendarSumOrderByAggregateInput } from './selected-calendar-sum-order-by-aggregate.input';

@InputType()
export class SelectedCalendarOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    integration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    externalId?: keyof typeof SortOrder;

    @Field(() => SelectedCalendarCountOrderByAggregateInput, {nullable:true})
    _count?: SelectedCalendarCountOrderByAggregateInput;

    @Field(() => SelectedCalendarAvgOrderByAggregateInput, {nullable:true})
    _avg?: SelectedCalendarAvgOrderByAggregateInput;

    @Field(() => SelectedCalendarMaxOrderByAggregateInput, {nullable:true})
    _max?: SelectedCalendarMaxOrderByAggregateInput;

    @Field(() => SelectedCalendarMinOrderByAggregateInput, {nullable:true})
    _min?: SelectedCalendarMinOrderByAggregateInput;

    @Field(() => SelectedCalendarSumOrderByAggregateInput, {nullable:true})
    _sum?: SelectedCalendarSumOrderByAggregateInput;
}
