import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { Type } from 'class-transformer';
import { ScheduleCreateWithoutEventTypeInput } from './schedule-create-without-event-type.input';

@InputType()
export class ScheduleCreateOrConnectWithoutEventTypeInput {

    @Field(() => ScheduleWhereUniqueInput, {nullable:false})
    @Type(() => ScheduleWhereUniqueInput)
    where!: ScheduleWhereUniqueInput;

    @Field(() => ScheduleCreateWithoutEventTypeInput, {nullable:false})
    @Type(() => ScheduleCreateWithoutEventTypeInput)
    create!: ScheduleCreateWithoutEventTypeInput;
}
