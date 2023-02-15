import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { WorkflowStepCountOrderByAggregateInput } from './workflow-step-count-order-by-aggregate.input';
import { WorkflowStepAvgOrderByAggregateInput } from './workflow-step-avg-order-by-aggregate.input';
import { WorkflowStepMaxOrderByAggregateInput } from './workflow-step-max-order-by-aggregate.input';
import { WorkflowStepMinOrderByAggregateInput } from './workflow-step-min-order-by-aggregate.input';
import { WorkflowStepSumOrderByAggregateInput } from './workflow-step-sum-order-by-aggregate.input';

@InputType()
export class WorkflowStepOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stepNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    action?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workflowId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sendTo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reminderBody?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    emailSubject?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    template?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    numberRequired?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sender?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    numberVerificationPending?: keyof typeof SortOrder;

    @Field(() => WorkflowStepCountOrderByAggregateInput, {nullable:true})
    _count?: WorkflowStepCountOrderByAggregateInput;

    @Field(() => WorkflowStepAvgOrderByAggregateInput, {nullable:true})
    _avg?: WorkflowStepAvgOrderByAggregateInput;

    @Field(() => WorkflowStepMaxOrderByAggregateInput, {nullable:true})
    _max?: WorkflowStepMaxOrderByAggregateInput;

    @Field(() => WorkflowStepMinOrderByAggregateInput, {nullable:true})
    _min?: WorkflowStepMinOrderByAggregateInput;

    @Field(() => WorkflowStepSumOrderByAggregateInput, {nullable:true})
    _sum?: WorkflowStepSumOrderByAggregateInput;
}
