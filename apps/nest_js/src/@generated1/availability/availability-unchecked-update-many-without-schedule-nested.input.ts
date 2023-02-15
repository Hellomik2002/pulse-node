import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityCreateWithoutScheduleInput } from './availability-create-without-schedule.input';
import { Type } from 'class-transformer';
import { AvailabilityCreateOrConnectWithoutScheduleInput } from './availability-create-or-connect-without-schedule.input';
import { AvailabilityUpsertWithWhereUniqueWithoutScheduleInput } from './availability-upsert-with-where-unique-without-schedule.input';
import { AvailabilityCreateManyScheduleInputEnvelope } from './availability-create-many-schedule-input-envelope.input';
import { AvailabilityWhereUniqueInput } from './availability-where-unique.input';
import { AvailabilityUpdateWithWhereUniqueWithoutScheduleInput } from './availability-update-with-where-unique-without-schedule.input';
import { AvailabilityUpdateManyWithWhereWithoutScheduleInput } from './availability-update-many-with-where-without-schedule.input';
import { AvailabilityScalarWhereInput } from './availability-scalar-where.input';

@InputType()
export class AvailabilityUncheckedUpdateManyWithoutScheduleNestedInput {

    @Field(() => [AvailabilityCreateWithoutScheduleInput], {nullable:true})
    @Type(() => AvailabilityCreateWithoutScheduleInput)
    create?: Array<AvailabilityCreateWithoutScheduleInput>;

    @Field(() => [AvailabilityCreateOrConnectWithoutScheduleInput], {nullable:true})
    @Type(() => AvailabilityCreateOrConnectWithoutScheduleInput)
    connectOrCreate?: Array<AvailabilityCreateOrConnectWithoutScheduleInput>;

    @Field(() => [AvailabilityUpsertWithWhereUniqueWithoutScheduleInput], {nullable:true})
    @Type(() => AvailabilityUpsertWithWhereUniqueWithoutScheduleInput)
    upsert?: Array<AvailabilityUpsertWithWhereUniqueWithoutScheduleInput>;

    @Field(() => AvailabilityCreateManyScheduleInputEnvelope, {nullable:true})
    @Type(() => AvailabilityCreateManyScheduleInputEnvelope)
    createMany?: AvailabilityCreateManyScheduleInputEnvelope;

    @Field(() => [AvailabilityWhereUniqueInput], {nullable:true})
    @Type(() => AvailabilityWhereUniqueInput)
    set?: Array<AvailabilityWhereUniqueInput>;

    @Field(() => [AvailabilityWhereUniqueInput], {nullable:true})
    @Type(() => AvailabilityWhereUniqueInput)
    disconnect?: Array<AvailabilityWhereUniqueInput>;

    @Field(() => [AvailabilityWhereUniqueInput], {nullable:true})
    @Type(() => AvailabilityWhereUniqueInput)
    delete?: Array<AvailabilityWhereUniqueInput>;

    @Field(() => [AvailabilityWhereUniqueInput], {nullable:true})
    @Type(() => AvailabilityWhereUniqueInput)
    connect?: Array<AvailabilityWhereUniqueInput>;

    @Field(() => [AvailabilityUpdateWithWhereUniqueWithoutScheduleInput], {nullable:true})
    @Type(() => AvailabilityUpdateWithWhereUniqueWithoutScheduleInput)
    update?: Array<AvailabilityUpdateWithWhereUniqueWithoutScheduleInput>;

    @Field(() => [AvailabilityUpdateManyWithWhereWithoutScheduleInput], {nullable:true})
    @Type(() => AvailabilityUpdateManyWithWhereWithoutScheduleInput)
    updateMany?: Array<AvailabilityUpdateManyWithWhereWithoutScheduleInput>;

    @Field(() => [AvailabilityScalarWhereInput], {nullable:true})
    @Type(() => AvailabilityScalarWhereInput)
    deleteMany?: Array<AvailabilityScalarWhereInput>;
}
