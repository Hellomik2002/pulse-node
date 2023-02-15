import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityWhereUniqueInput } from './availability-where-unique.input';
import { Type } from 'class-transformer';
import { AvailabilityCreateWithoutScheduleInput } from './availability-create-without-schedule.input';

@InputType()
export class AvailabilityCreateOrConnectWithoutScheduleInput {

    @Field(() => AvailabilityWhereUniqueInput, {nullable:false})
    @Type(() => AvailabilityWhereUniqueInput)
    where!: AvailabilityWhereUniqueInput;

    @Field(() => AvailabilityCreateWithoutScheduleInput, {nullable:false})
    @Type(() => AvailabilityCreateWithoutScheduleInput)
    create!: AvailabilityCreateWithoutScheduleInput;
}
