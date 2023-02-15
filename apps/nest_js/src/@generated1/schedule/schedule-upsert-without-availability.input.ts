import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleUpdateWithoutAvailabilityInput } from './schedule-update-without-availability.input';
import { Type } from 'class-transformer';
import { ScheduleCreateWithoutAvailabilityInput } from './schedule-create-without-availability.input';

@InputType()
export class ScheduleUpsertWithoutAvailabilityInput {

    @Field(() => ScheduleUpdateWithoutAvailabilityInput, {nullable:false})
    @Type(() => ScheduleUpdateWithoutAvailabilityInput)
    update!: ScheduleUpdateWithoutAvailabilityInput;

    @Field(() => ScheduleCreateWithoutAvailabilityInput, {nullable:false})
    @Type(() => ScheduleCreateWithoutAvailabilityInput)
    create!: ScheduleCreateWithoutAvailabilityInput;
}
