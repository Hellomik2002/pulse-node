import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleCreateWithoutEventTypeInput } from './schedule-create-without-event-type.input';
import { Type } from 'class-transformer';
import { ScheduleCreateOrConnectWithoutEventTypeInput } from './schedule-create-or-connect-without-event-type.input';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';

@InputType()
export class ScheduleCreateNestedOneWithoutEventTypeInput {

    @Field(() => ScheduleCreateWithoutEventTypeInput, {nullable:true})
    @Type(() => ScheduleCreateWithoutEventTypeInput)
    create?: ScheduleCreateWithoutEventTypeInput;

    @Field(() => ScheduleCreateOrConnectWithoutEventTypeInput, {nullable:true})
    @Type(() => ScheduleCreateOrConnectWithoutEventTypeInput)
    connectOrCreate?: ScheduleCreateOrConnectWithoutEventTypeInput;

    @Field(() => ScheduleWhereUniqueInput, {nullable:true})
    @Type(() => ScheduleWhereUniqueInput)
    connect?: ScheduleWhereUniqueInput;
}
