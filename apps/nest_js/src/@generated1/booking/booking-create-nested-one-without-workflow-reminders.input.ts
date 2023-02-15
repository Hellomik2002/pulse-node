import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutWorkflowRemindersInput } from './booking-create-without-workflow-reminders.input';
import { Type } from 'class-transformer';
import { BookingCreateOrConnectWithoutWorkflowRemindersInput } from './booking-create-or-connect-without-workflow-reminders.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';

@InputType()
export class BookingCreateNestedOneWithoutWorkflowRemindersInput {

    @Field(() => BookingCreateWithoutWorkflowRemindersInput, {nullable:true})
    @Type(() => BookingCreateWithoutWorkflowRemindersInput)
    create?: BookingCreateWithoutWorkflowRemindersInput;

    @Field(() => BookingCreateOrConnectWithoutWorkflowRemindersInput, {nullable:true})
    @Type(() => BookingCreateOrConnectWithoutWorkflowRemindersInput)
    connectOrCreate?: BookingCreateOrConnectWithoutWorkflowRemindersInput;

    @Field(() => BookingWhereUniqueInput, {nullable:true})
    @Type(() => BookingWhereUniqueInput)
    connect?: BookingWhereUniqueInput;
}
