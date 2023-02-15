import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BookingRelationFilter } from '../booking/booking-relation-filter.input';
import { EnumWorkflowMethodsFilter } from '../prisma/enum-workflow-methods-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { WorkflowStepRelationFilter } from '../workflow-step/workflow-step-relation-filter.input';

@InputType()
export class WorkflowReminderWhereInput {

    @Field(() => [WorkflowReminderWhereInput], {nullable:true})
    AND?: Array<WorkflowReminderWhereInput>;

    @Field(() => [WorkflowReminderWhereInput], {nullable:true})
    OR?: Array<WorkflowReminderWhereInput>;

    @Field(() => [WorkflowReminderWhereInput], {nullable:true})
    NOT?: Array<WorkflowReminderWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    bookingUid?: StringFilter;

    @Field(() => BookingRelationFilter, {nullable:true})
    booking?: BookingRelationFilter;

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

    @Field(() => WorkflowStepRelationFilter, {nullable:true})
    workflowStep?: WorkflowStepRelationFilter;
}
