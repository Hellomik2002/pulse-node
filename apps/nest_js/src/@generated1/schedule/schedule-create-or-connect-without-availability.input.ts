import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { Type } from 'class-transformer';
import { ScheduleCreateWithoutAvailabilityInput } from './schedule-create-without-availability.input';

@InputType()
export class ScheduleCreateOrConnectWithoutAvailabilityInput {

    @Field(() => ScheduleWhereUniqueInput, {nullable:false})
    @Type(() => ScheduleWhereUniqueInput)
    where!: ScheduleWhereUniqueInput;

    @Field(() => ScheduleCreateWithoutAvailabilityInput, {nullable:false})
    @Type(() => ScheduleCreateWithoutAvailabilityInput)
    create!: ScheduleCreateWithoutAvailabilityInput;
}
