import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleCreateWithoutAvailabilityInput } from './schedule-create-without-availability.input';
import { Type } from 'class-transformer';
import { ScheduleCreateOrConnectWithoutAvailabilityInput } from './schedule-create-or-connect-without-availability.input';
import { ScheduleUpsertWithoutAvailabilityInput } from './schedule-upsert-without-availability.input';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { ScheduleUpdateWithoutAvailabilityInput } from './schedule-update-without-availability.input';

@InputType()
export class ScheduleUpdateOneWithoutAvailabilityNestedInput {

    @Field(() => ScheduleCreateWithoutAvailabilityInput, {nullable:true})
    @Type(() => ScheduleCreateWithoutAvailabilityInput)
    create?: ScheduleCreateWithoutAvailabilityInput;

    @Field(() => ScheduleCreateOrConnectWithoutAvailabilityInput, {nullable:true})
    @Type(() => ScheduleCreateOrConnectWithoutAvailabilityInput)
    connectOrCreate?: ScheduleCreateOrConnectWithoutAvailabilityInput;

    @Field(() => ScheduleUpsertWithoutAvailabilityInput, {nullable:true})
    @Type(() => ScheduleUpsertWithoutAvailabilityInput)
    upsert?: ScheduleUpsertWithoutAvailabilityInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ScheduleWhereUniqueInput, {nullable:true})
    @Type(() => ScheduleWhereUniqueInput)
    connect?: ScheduleWhereUniqueInput;

    @Field(() => ScheduleUpdateWithoutAvailabilityInput, {nullable:true})
    @Type(() => ScheduleUpdateWithoutAvailabilityInput)
    update?: ScheduleUpdateWithoutAvailabilityInput;
}
