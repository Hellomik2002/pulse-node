import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { WorkflowOrderByWithRelationInput } from '../workflow/workflow-order-by-with-relation.input';
import { WorkflowReminderOrderByRelationAggregateInput } from '../workflow-reminder/workflow-reminder-order-by-relation-aggregate.input';

@InputType()
export class WorkflowStepOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stepNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    action?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workflowId?: keyof typeof SortOrder;

    @Field(() => WorkflowOrderByWithRelationInput, {nullable:true})
    workflow?: WorkflowOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    sendTo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reminderBody?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    emailSubject?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    template?: keyof typeof SortOrder;

    @Field(() => WorkflowReminderOrderByRelationAggregateInput, {nullable:true})
    workflowReminders?: WorkflowReminderOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    numberRequired?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sender?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    numberVerificationPending?: keyof typeof SortOrder;
}
