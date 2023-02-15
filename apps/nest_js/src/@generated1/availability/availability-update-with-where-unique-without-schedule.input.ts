import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityWhereUniqueInput } from './availability-where-unique.input';
import { Type } from 'class-transformer';
import { AvailabilityUpdateWithoutScheduleInput } from './availability-update-without-schedule.input';

@InputType()
export class AvailabilityUpdateWithWhereUniqueWithoutScheduleInput {

    @Field(() => AvailabilityWhereUniqueInput, {nullable:false})
    @Type(() => AvailabilityWhereUniqueInput)
    where!: AvailabilityWhereUniqueInput;

    @Field(() => AvailabilityUpdateWithoutScheduleInput, {nullable:false})
    @Type(() => AvailabilityUpdateWithoutScheduleInput)
    data!: AvailabilityUpdateWithoutScheduleInput;
}
