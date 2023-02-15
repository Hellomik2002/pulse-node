import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ReminderMailCountOrderByAggregateInput } from './reminder-mail-count-order-by-aggregate.input';
import { ReminderMailAvgOrderByAggregateInput } from './reminder-mail-avg-order-by-aggregate.input';
import { ReminderMailMaxOrderByAggregateInput } from './reminder-mail-max-order-by-aggregate.input';
import { ReminderMailMinOrderByAggregateInput } from './reminder-mail-min-order-by-aggregate.input';
import { ReminderMailSumOrderByAggregateInput } from './reminder-mail-sum-order-by-aggregate.input';

@InputType()
export class ReminderMailOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    referenceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reminderType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    elapsedMinutes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => ReminderMailCountOrderByAggregateInput, {nullable:true})
    _count?: ReminderMailCountOrderByAggregateInput;

    @Field(() => ReminderMailAvgOrderByAggregateInput, {nullable:true})
    _avg?: ReminderMailAvgOrderByAggregateInput;

    @Field(() => ReminderMailMaxOrderByAggregateInput, {nullable:true})
    _max?: ReminderMailMaxOrderByAggregateInput;

    @Field(() => ReminderMailMinOrderByAggregateInput, {nullable:true})
    _min?: ReminderMailMinOrderByAggregateInput;

    @Field(() => ReminderMailSumOrderByAggregateInput, {nullable:true})
    _sum?: ReminderMailSumOrderByAggregateInput;
}
