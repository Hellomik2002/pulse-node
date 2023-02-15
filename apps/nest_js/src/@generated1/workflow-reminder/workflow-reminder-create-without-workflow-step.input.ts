import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateNestedOneWithoutWorkflowRemindersInput } from '../booking/booking-create-nested-one-without-workflow-reminders.input';
import { WorkflowMethods } from '../prisma/workflow-methods.enum';

@InputType()
export class WorkflowReminderCreateWithoutWorkflowStepInput {

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
}
