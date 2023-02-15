import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowReminderCreateWithoutBookingInput } from './workflow-reminder-create-without-booking.input';
import { Type } from 'class-transformer';
import { WorkflowReminderCreateOrConnectWithoutBookingInput } from './workflow-reminder-create-or-connect-without-booking.input';
import { WorkflowReminderUpsertWithWhereUniqueWithoutBookingInput } from './workflow-reminder-upsert-with-where-unique-without-booking.input';
import { WorkflowReminderCreateManyBookingInputEnvelope } from './workflow-reminder-create-many-booking-input-envelope.input';
import { WorkflowReminderWhereUniqueInput } from './workflow-reminder-where-unique.input';
import { WorkflowReminderUpdateWithWhereUniqueWithoutBookingInput } from './workflow-reminder-update-with-where-unique-without-booking.input';
import { WorkflowReminderUpdateManyWithWhereWithoutBookingInput } from './workflow-reminder-update-many-with-where-without-booking.input';
import { WorkflowReminderScalarWhereInput } from './workflow-reminder-scalar-where.input';

@InputType()
export class WorkflowReminderUncheckedUpdateManyWithoutBookingNestedInput {

    @Field(() => [WorkflowReminderCreateWithoutBookingInput], {nullable:true})
    @Type(() => WorkflowReminderCreateWithoutBookingInput)
    create?: Array<WorkflowReminderCreateWithoutBookingInput>;

    @Field(() => [WorkflowReminderCreateOrConnectWithoutBookingInput], {nullable:true})
    @Type(() => WorkflowReminderCreateOrConnectWithoutBookingInput)
    connectOrCreate?: Array<WorkflowReminderCreateOrConnectWithoutBookingInput>;

    @Field(() => [WorkflowReminderUpsertWithWhereUniqueWithoutBookingInput], {nullable:true})
    @Type(() => WorkflowReminderUpsertWithWhereUniqueWithoutBookingInput)
    upsert?: Array<WorkflowReminderUpsertWithWhereUniqueWithoutBookingInput>;

    @Field(() => WorkflowReminderCreateManyBookingInputEnvelope, {nullable:true})
    @Type(() => WorkflowReminderCreateManyBookingInputEnvelope)
    createMany?: WorkflowReminderCreateManyBookingInputEnvelope;

    @Field(() => [WorkflowReminderWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowReminderWhereUniqueInput)
    set?: Array<WorkflowReminderWhereUniqueInput>;

    @Field(() => [WorkflowReminderWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowReminderWhereUniqueInput)
    disconnect?: Array<WorkflowReminderWhereUniqueInput>;

    @Field(() => [WorkflowReminderWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowReminderWhereUniqueInput)
    delete?: Array<WorkflowReminderWhereUniqueInput>;

    @Field(() => [WorkflowReminderWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowReminderWhereUniqueInput)
    connect?: Array<WorkflowReminderWhereUniqueInput>;

    @Field(() => [WorkflowReminderUpdateWithWhereUniqueWithoutBookingInput], {nullable:true})
    @Type(() => WorkflowReminderUpdateWithWhereUniqueWithoutBookingInput)
    update?: Array<WorkflowReminderUpdateWithWhereUniqueWithoutBookingInput>;

    @Field(() => [WorkflowReminderUpdateManyWithWhereWithoutBookingInput], {nullable:true})
    @Type(() => WorkflowReminderUpdateManyWithWhereWithoutBookingInput)
    updateMany?: Array<WorkflowReminderUpdateManyWithWhereWithoutBookingInput>;

    @Field(() => [WorkflowReminderScalarWhereInput], {nullable:true})
    @Type(() => WorkflowReminderScalarWhereInput)
    deleteMany?: Array<WorkflowReminderScalarWhereInput>;
}
