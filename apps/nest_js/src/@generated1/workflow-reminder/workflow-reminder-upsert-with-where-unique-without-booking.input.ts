import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowReminderWhereUniqueInput } from './workflow-reminder-where-unique.input';
import { Type } from 'class-transformer';
import { WorkflowReminderUpdateWithoutBookingInput } from './workflow-reminder-update-without-booking.input';
import { WorkflowReminderCreateWithoutBookingInput } from './workflow-reminder-create-without-booking.input';

@InputType()
export class WorkflowReminderUpsertWithWhereUniqueWithoutBookingInput {

    @Field(() => WorkflowReminderWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowReminderWhereUniqueInput)
    where!: WorkflowReminderWhereUniqueInput;

    @Field(() => WorkflowReminderUpdateWithoutBookingInput, {nullable:false})
    @Type(() => WorkflowReminderUpdateWithoutBookingInput)
    update!: WorkflowReminderUpdateWithoutBookingInput;

    @Field(() => WorkflowReminderCreateWithoutBookingInput, {nullable:false})
    @Type(() => WorkflowReminderCreateWithoutBookingInput)
    create!: WorkflowReminderCreateWithoutBookingInput;
}
