import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumWorkflowActionsFilter } from '../prisma/enum-workflow-actions-filter.input';
import { WorkflowRelationFilter } from '../workflow/workflow-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumWorkflowTemplatesFilter } from '../prisma/enum-workflow-templates-filter.input';
import { WorkflowReminderListRelationFilter } from '../workflow-reminder/workflow-reminder-list-relation-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class WorkflowStepWhereInput {

    @Field(() => [WorkflowStepWhereInput], {nullable:true})
    AND?: Array<WorkflowStepWhereInput>;

    @Field(() => [WorkflowStepWhereInput], {nullable:true})
    OR?: Array<WorkflowStepWhereInput>;

    @Field(() => [WorkflowStepWhereInput], {nullable:true})
    NOT?: Array<WorkflowStepWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    stepNumber?: IntFilter;

    @Field(() => EnumWorkflowActionsFilter, {nullable:true})
    action?: EnumWorkflowActionsFilter;

    @Field(() => IntFilter, {nullable:true})
    workflowId?: IntFilter;

    @Field(() => WorkflowRelationFilter, {nullable:true})
    workflow?: WorkflowRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    sendTo?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    reminderBody?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    emailSubject?: StringNullableFilter;

    @Field(() => EnumWorkflowTemplatesFilter, {nullable:true})
    template?: EnumWorkflowTemplatesFilter;

    @Field(() => WorkflowReminderListRelationFilter, {nullable:true})
    workflowReminders?: WorkflowReminderListRelationFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    numberRequired?: BoolNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    sender?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    numberVerificationPending?: BoolFilter;
}
