import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingUpdateWithoutWorkflowRemindersInput } from './booking-update-without-workflow-reminders.input';
import { Type } from 'class-transformer';
import { BookingCreateWithoutWorkflowRemindersInput } from './booking-create-without-workflow-reminders.input';

@InputType()
export class BookingUpsertWithoutWorkflowRemindersInput {

    @Field(() => BookingUpdateWithoutWorkflowRemindersInput, {nullable:false})
    @Type(() => BookingUpdateWithoutWorkflowRemindersInput)
    update!: BookingUpdateWithoutWorkflowRemindersInput;

    @Field(() => BookingCreateWithoutWorkflowRemindersInput, {nullable:false})
    @Type(() => BookingCreateWithoutWorkflowRemindersInput)
    create!: BookingCreateWithoutWorkflowRemindersInput;
}
