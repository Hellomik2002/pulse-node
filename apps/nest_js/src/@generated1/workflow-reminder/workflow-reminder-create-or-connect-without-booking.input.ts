import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowReminderWhereUniqueInput } from './workflow-reminder-where-unique.input';
import { Type } from 'class-transformer';
import { WorkflowReminderCreateWithoutBookingInput } from './workflow-reminder-create-without-booking.input';

@InputType()
export class WorkflowReminderCreateOrConnectWithoutBookingInput {

    @Field(() => WorkflowReminderWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowReminderWhereUniqueInput)
    where!: WorkflowReminderWhereUniqueInput;

    @Field(() => WorkflowReminderCreateWithoutBookingInput, {nullable:false})
    @Type(() => WorkflowReminderCreateWithoutBookingInput)
    create!: WorkflowReminderCreateWithoutBookingInput;
}
