import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { WorkflowReminderCountOrderByAggregateInput } from './workflow-reminder-count-order-by-aggregate.input';
import { WorkflowReminderAvgOrderByAggregateInput } from './workflow-reminder-avg-order-by-aggregate.input';
import { WorkflowReminderMaxOrderByAggregateInput } from './workflow-reminder-max-order-by-aggregate.input';
import { WorkflowReminderMinOrderByAggregateInput } from './workflow-reminder-min-order-by-aggregate.input';
import { WorkflowReminderSumOrderByAggregateInput } from './workflow-reminder-sum-order-by-aggregate.input';

@InputType()
export class WorkflowReminderOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bookingUid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    method?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    scheduledDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    referenceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    scheduled?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workflowStepId?: keyof typeof SortOrder;

    @Field(() => WorkflowReminderCountOrderByAggregateInput, {nullable:true})
    _count?: WorkflowReminderCountOrderByAggregateInput;

    @Field(() => WorkflowReminderAvgOrderByAggregateInput, {nullable:true})
    _avg?: WorkflowReminderAvgOrderByAggregateInput;

    @Field(() => WorkflowReminderMaxOrderByAggregateInput, {nullable:true})
    _max?: WorkflowReminderMaxOrderByAggregateInput;

    @Field(() => WorkflowReminderMinOrderByAggregateInput, {nullable:true})
    _min?: WorkflowReminderMinOrderByAggregateInput;

    @Field(() => WorkflowReminderSumOrderByAggregateInput, {nullable:true})
    _sum?: WorkflowReminderSumOrderByAggregateInput;
}
