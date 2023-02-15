import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { Type } from 'class-transformer';
import { BookingCreateWithoutWorkflowRemindersInput } from './booking-create-without-workflow-reminders.input';

@InputType()
export class BookingCreateOrConnectWithoutWorkflowRemindersInput {

    @Field(() => BookingWhereUniqueInput, {nullable:false})
    @Type(() => BookingWhereUniqueInput)
    where!: BookingWhereUniqueInput;

    @Field(() => BookingCreateWithoutWorkflowRemindersInput, {nullable:false})
    @Type(() => BookingCreateWithoutWorkflowRemindersInput)
    create!: BookingCreateWithoutWorkflowRemindersInput;
}
