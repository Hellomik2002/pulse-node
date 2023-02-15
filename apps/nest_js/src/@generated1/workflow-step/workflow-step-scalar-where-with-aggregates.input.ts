import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumWorkflowActionsWithAggregatesFilter } from '../prisma/enum-workflow-actions-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumWorkflowTemplatesWithAggregatesFilter } from '../prisma/enum-workflow-templates-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class WorkflowStepScalarWhereWithAggregatesInput {

    @Field(() => [WorkflowStepScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<WorkflowStepScalarWhereWithAggregatesInput>;

    @Field(() => [WorkflowStepScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<WorkflowStepScalarWhereWithAggregatesInput>;

    @Field(() => [WorkflowStepScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<WorkflowStepScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    stepNumber?: IntWithAggregatesFilter;

    @Field(() => EnumWorkflowActionsWithAggregatesFilter, {nullable:true})
    action?: EnumWorkflowActionsWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    workflowId?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    sendTo?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    reminderBody?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    emailSubject?: StringNullableWithAggregatesFilter;

    @Field(() => EnumWorkflowTemplatesWithAggregatesFilter, {nullable:true})
    template?: EnumWorkflowTemplatesWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    numberRequired?: BoolNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    sender?: StringNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    numberVerificationPending?: BoolWithAggregatesFilter;
}
