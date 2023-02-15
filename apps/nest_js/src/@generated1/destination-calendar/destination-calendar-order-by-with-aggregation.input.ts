import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DestinationCalendarCountOrderByAggregateInput } from './destination-calendar-count-order-by-aggregate.input';
import { DestinationCalendarAvgOrderByAggregateInput } from './destination-calendar-avg-order-by-aggregate.input';
import { DestinationCalendarMaxOrderByAggregateInput } from './destination-calendar-max-order-by-aggregate.input';
import { DestinationCalendarMinOrderByAggregateInput } from './destination-calendar-min-order-by-aggregate.input';
import { DestinationCalendarSumOrderByAggregateInput } from './destination-calendar-sum-order-by-aggregate.input';

@InputType()
export class DestinationCalendarOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    integration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    externalId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventTypeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    credentialId?: keyof typeof SortOrder;

    @Field(() => DestinationCalendarCountOrderByAggregateInput, {nullable:true})
    _count?: DestinationCalendarCountOrderByAggregateInput;

    @Field(() => DestinationCalendarAvgOrderByAggregateInput, {nullable:true})
    _avg?: DestinationCalendarAvgOrderByAggregateInput;

    @Field(() => DestinationCalendarMaxOrderByAggregateInput, {nullable:true})
    _max?: DestinationCalendarMaxOrderByAggregateInput;

    @Field(() => DestinationCalendarMinOrderByAggregateInput, {nullable:true})
    _min?: DestinationCalendarMinOrderByAggregateInput;

    @Field(() => DestinationCalendarSumOrderByAggregateInput, {nullable:true})
    _sum?: DestinationCalendarSumOrderByAggregateInput;
}
