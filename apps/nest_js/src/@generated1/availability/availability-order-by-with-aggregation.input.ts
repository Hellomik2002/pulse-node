import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AvailabilityCountOrderByAggregateInput } from './availability-count-order-by-aggregate.input';
import { AvailabilityAvgOrderByAggregateInput } from './availability-avg-order-by-aggregate.input';
import { AvailabilityMaxOrderByAggregateInput } from './availability-max-order-by-aggregate.input';
import { AvailabilityMinOrderByAggregateInput } from './availability-min-order-by-aggregate.input';
import { AvailabilitySumOrderByAggregateInput } from './availability-sum-order-by-aggregate.input';

@InputType()
export class AvailabilityOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventTypeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    days?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    scheduleId?: keyof typeof SortOrder;

    @Field(() => AvailabilityCountOrderByAggregateInput, {nullable:true})
    _count?: AvailabilityCountOrderByAggregateInput;

    @Field(() => AvailabilityAvgOrderByAggregateInput, {nullable:true})
    _avg?: AvailabilityAvgOrderByAggregateInput;

    @Field(() => AvailabilityMaxOrderByAggregateInput, {nullable:true})
    _max?: AvailabilityMaxOrderByAggregateInput;

    @Field(() => AvailabilityMinOrderByAggregateInput, {nullable:true})
    _min?: AvailabilityMinOrderByAggregateInput;

    @Field(() => AvailabilitySumOrderByAggregateInput, {nullable:true})
    _sum?: AvailabilitySumOrderByAggregateInput;
}
