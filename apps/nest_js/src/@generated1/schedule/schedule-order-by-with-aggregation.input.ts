import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ScheduleCountOrderByAggregateInput } from './schedule-count-order-by-aggregate.input';
import { ScheduleAvgOrderByAggregateInput } from './schedule-avg-order-by-aggregate.input';
import { ScheduleMaxOrderByAggregateInput } from './schedule-max-order-by-aggregate.input';
import { ScheduleMinOrderByAggregateInput } from './schedule-min-order-by-aggregate.input';
import { ScheduleSumOrderByAggregateInput } from './schedule-sum-order-by-aggregate.input';

@InputType()
export class ScheduleOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timeZone?: keyof typeof SortOrder;

    @Field(() => ScheduleCountOrderByAggregateInput, {nullable:true})
    _count?: ScheduleCountOrderByAggregateInput;

    @Field(() => ScheduleAvgOrderByAggregateInput, {nullable:true})
    _avg?: ScheduleAvgOrderByAggregateInput;

    @Field(() => ScheduleMaxOrderByAggregateInput, {nullable:true})
    _max?: ScheduleMaxOrderByAggregateInput;

    @Field(() => ScheduleMinOrderByAggregateInput, {nullable:true})
    _min?: ScheduleMinOrderByAggregateInput;

    @Field(() => ScheduleSumOrderByAggregateInput, {nullable:true})
    _sum?: ScheduleSumOrderByAggregateInput;
}
