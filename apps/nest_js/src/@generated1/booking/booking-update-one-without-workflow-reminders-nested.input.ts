import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutWorkflowRemindersInput } from './booking-create-without-workflow-reminders.input';
import { Type } from 'class-transformer';
import { BookingCreateOrConnectWithoutWorkflowRemindersInput } from './booking-create-or-connect-without-workflow-reminders.input';
import { BookingUpsertWithoutWorkflowRemindersInput } from './booking-upsert-without-workflow-reminders.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingUpdateWithoutWorkflowRemindersInput } from './booking-update-without-workflow-reminders.input';

@InputType()
export class BookingUpdateOneWithoutWorkflowRemindersNestedInput {

    @Field(() => BookingCreateWithoutWorkflowRemindersInput, {nullable:true})
    @Type(() => BookingCreateWithoutWorkflowRemindersInput)
    create?: BookingCreateWithoutWorkflowRemindersInput;

    @Field(() => BookingCreateOrConnectWithoutWorkflowRemindersInput, {nullable:true})
    @Type(() => BookingCreateOrConnectWithoutWorkflowRemindersInput)
    connectOrCreate?: BookingCreateOrConnectWithoutWorkflowRemindersInput;

    @Field(() => BookingUpsertWithoutWorkflowRemindersInput, {nullable:true})
    @Type(() => BookingUpsertWithoutWorkflowRemindersInput)
    upsert?: BookingUpsertWithoutWorkflowRemindersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => BookingWhereUniqueInput, {nullable:true})
    @Type(() => BookingWhereUniqueInput)
    connect?: BookingWhereUniqueInput;

    @Field(() => BookingUpdateWithoutWorkflowRemindersInput, {nullable:true})
    @Type(() => BookingUpdateWithoutWorkflowRemindersInput)
    update?: BookingUpdateWithoutWorkflowRemindersInput;
}
