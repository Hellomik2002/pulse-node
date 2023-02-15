import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowReminderWhereUniqueInput } from './workflow-reminder-where-unique.input';
import { Type } from 'class-transformer';
import { WorkflowReminderUpdateWithoutBookingInput } from './workflow-reminder-update-without-booking.input';

@InputType()
export class WorkflowReminderUpdateWithWhereUniqueWithoutBookingInput {

    @Field(() => WorkflowReminderWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowReminderWhereUniqueInput)
    where!: WorkflowReminderWhereUniqueInput;

    @Field(() => WorkflowReminderUpdateWithoutBookingInput, {nullable:false})
    @Type(() => WorkflowReminderUpdateWithoutBookingInput)
    data!: WorkflowReminderUpdateWithoutBookingInput;
}
