import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityWhereUniqueInput } from './availability-where-unique.input';
import { Type } from 'class-transformer';
import { AvailabilityUpdateWithoutScheduleInput } from './availability-update-without-schedule.input';
import { AvailabilityCreateWithoutScheduleInput } from './availability-create-without-schedule.input';

@InputType()
export class AvailabilityUpsertWithWhereUniqueWithoutScheduleInput {

    @Field(() => AvailabilityWhereUniqueInput, {nullable:false})
    @Type(() => AvailabilityWhereUniqueInput)
    where!: AvailabilityWhereUniqueInput;

    @Field(() => AvailabilityUpdateWithoutScheduleInput, {nullable:false})
    @Type(() => AvailabilityUpdateWithoutScheduleInput)
    update!: AvailabilityUpdateWithoutScheduleInput;

    @Field(() => AvailabilityCreateWithoutScheduleInput, {nullable:false})
    @Type(() => AvailabilityCreateWithoutScheduleInput)
    create!: AvailabilityCreateWithoutScheduleInput;
}
