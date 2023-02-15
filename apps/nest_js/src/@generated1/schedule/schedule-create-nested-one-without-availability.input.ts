import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleCreateWithoutAvailabilityInput } from './schedule-create-without-availability.input';
import { Type } from 'class-transformer';
import { ScheduleCreateOrConnectWithoutAvailabilityInput } from './schedule-create-or-connect-without-availability.input';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';

@InputType()
export class ScheduleCreateNestedOneWithoutAvailabilityInput {

    @Field(() => ScheduleCreateWithoutAvailabilityInput, {nullable:true})
    @Type(() => ScheduleCreateWithoutAvailabilityInput)
    create?: ScheduleCreateWithoutAvailabilityInput;

    @Field(() => ScheduleCreateOrConnectWithoutAvailabilityInput, {nullable:true})
    @Type(() => ScheduleCreateOrConnectWithoutAvailabilityInput)
    connectOrCreate?: ScheduleCreateOrConnectWithoutAvailabilityInput;

    @Field(() => ScheduleWhereUniqueInput, {nullable:true})
    @Type(() => ScheduleWhereUniqueInput)
    connect?: ScheduleWhereUniqueInput;
}
