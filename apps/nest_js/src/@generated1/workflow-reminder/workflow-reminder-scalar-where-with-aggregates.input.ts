import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumWorkflowMethodsWithAggregatesFilter } from '../prisma/enum-workflow-methods-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class WorkflowReminderScalarWhereWithAggregatesInput {

    @Field(() => [WorkflowReminderScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<WorkflowReminderScalarWhereWithAggregatesInput>;

    @Field(() => [WorkflowReminderScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<WorkflowReminderScalarWhereWithAggregatesInput>;

    @Field(() => [WorkflowReminderScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<WorkflowReminderScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    bookingUid?: StringWithAggregatesFilter;

    @Field(() => EnumWorkflowMethodsWithAggregatesFilter, {nullable:true})
    method?: EnumWorkflowMethodsWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    scheduledDate?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    referenceId?: StringNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    scheduled?: BoolWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    workflowStepId?: IntWithAggregatesFilter;
}
