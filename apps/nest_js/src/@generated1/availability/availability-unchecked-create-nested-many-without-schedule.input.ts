import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityCreateWithoutScheduleInput } from './availability-create-without-schedule.input';
import { Type } from 'class-transformer';
import { AvailabilityCreateOrConnectWithoutScheduleInput } from './availability-create-or-connect-without-schedule.input';
import { AvailabilityCreateManyScheduleInputEnvelope } from './availability-create-many-schedule-input-envelope.input';
import { AvailabilityWhereUniqueInput } from './availability-where-unique.input';

@InputType()
export class AvailabilityUncheckedCreateNestedManyWithoutScheduleInput {

    @Field(() => [AvailabilityCreateWithoutScheduleInput], {nullable:true})
    @Type(() => AvailabilityCreateWithoutScheduleInput)
    create?: Array<AvailabilityCreateWithoutScheduleInput>;

    @Field(() => [AvailabilityCreateOrConnectWithoutScheduleInput], {nullable:true})
    @Type(() => AvailabilityCreateOrConnectWithoutScheduleInput)
    connectOrCreate?: Array<AvailabilityCreateOrConnectWithoutScheduleInput>;

    @Field(() => AvailabilityCreateManyScheduleInputEnvelope, {nullable:true})
    @Type(() => AvailabilityCreateManyScheduleInputEnvelope)
    createMany?: AvailabilityCreateManyScheduleInputEnvelope;

    @Field(() => [AvailabilityWhereUniqueInput], {nullable:true})
    @Type(() => AvailabilityWhereUniqueInput)
    connect?: Array<AvailabilityWhereUniqueInput>;
}
