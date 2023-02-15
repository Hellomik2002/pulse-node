import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowReminderCreateWithoutBookingInput } from './workflow-reminder-create-without-booking.input';
import { Type } from 'class-transformer';
import { WorkflowReminderCreateOrConnectWithoutBookingInput } from './workflow-reminder-create-or-connect-without-booking.input';
import { WorkflowReminderCreateManyBookingInputEnvelope } from './workflow-reminder-create-many-booking-input-envelope.input';
import { WorkflowReminderWhereUniqueInput } from './workflow-reminder-where-unique.input';

@InputType()
export class WorkflowReminderCreateNestedManyWithoutBookingInput {

    @Field(() => [WorkflowReminderCreateWithoutBookingInput], {nullable:true})
    @Type(() => WorkflowReminderCreateWithoutBookingInput)
    create?: Array<WorkflowReminderCreateWithoutBookingInput>;

    @Field(() => [WorkflowReminderCreateOrConnectWithoutBookingInput], {nullable:true})
    @Type(() => WorkflowReminderCreateOrConnectWithoutBookingInput)
    connectOrCreate?: Array<WorkflowReminderCreateOrConnectWithoutBookingInput>;

    @Field(() => WorkflowReminderCreateManyBookingInputEnvelope, {nullable:true})
    @Type(() => WorkflowReminderCreateManyBookingInputEnvelope)
    createMany?: WorkflowReminderCreateManyBookingInputEnvelope;

    @Field(() => [WorkflowReminderWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowReminderWhereUniqueInput)
    connect?: Array<WorkflowReminderWhereUniqueInput>;
}
