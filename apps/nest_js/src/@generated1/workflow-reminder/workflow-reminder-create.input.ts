import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateNestedOneWithoutWorkflowRemindersInput } from '../booking/booking-create-nested-one-without-workflow-reminders.input';
import { WorkflowMethods } from '../prisma/workflow-methods.enum';
import { WorkflowStepCreateNestedOneWithoutWorkflowRemindersInput } from '../workflow-step/workflow-step-create-nested-one-without-workflow-reminders.input';

@InputType()
export class WorkflowReminderCreateInput {

    @Field(() => BookingCreateNestedOneWithoutWorkflowRemindersInput, {nullable:true})
    booking?: BookingCreateNestedOneWithoutWorkflowRemindersInput;

    @Field(() => WorkflowMethods, {nullable:false})
    method!: keyof typeof WorkflowMethods;

    @Field(() => Date, {nullable:false})
    scheduledDate!: Date | string;

    @Field(() => String, {nullable:true})
    referenceId?: string;

    @Field(() => Boolean, {nullable:false})
    scheduled!: boolean;

    @Field(() => WorkflowStepCreateNestedOneWithoutWorkflowRemindersInput, {nullable:false})
    workflowStep!: WorkflowStepCreateNestedOneWithoutWorkflowRemindersInput;
}
