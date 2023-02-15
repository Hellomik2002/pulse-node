import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumWorkflowMethodsFilter } from '../prisma/enum-workflow-methods-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class WorkflowReminderScalarWhereInput {

    @Field(() => [WorkflowReminderScalarWhereInput], {nullable:true})
    AND?: Array<WorkflowReminderScalarWhereInput>;

    @Field(() => [WorkflowReminderScalarWhereInput], {nullable:true})
    OR?: Array<WorkflowReminderScalarWhereInput>;

    @Field(() => [WorkflowReminderScalarWhereInput], {nullable:true})
    NOT?: Array<WorkflowReminderScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    bookingUid?: StringFilter;

    @Field(() => EnumWorkflowMethodsFilter, {nullable:true})
    method?: EnumWorkflowMethodsFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    scheduledDate?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    referenceId?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    scheduled?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    workflowStepId?: IntFilter;
}
