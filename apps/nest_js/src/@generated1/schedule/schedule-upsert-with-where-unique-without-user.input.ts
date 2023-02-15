import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { Type } from 'class-transformer';
import { ScheduleUpdateWithoutUserInput } from './schedule-update-without-user.input';
import { ScheduleCreateWithoutUserInput } from './schedule-create-without-user.input';

@InputType()
export class ScheduleUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ScheduleWhereUniqueInput, {nullable:false})
    @Type(() => ScheduleWhereUniqueInput)
    where!: ScheduleWhereUniqueInput;

    @Field(() => ScheduleUpdateWithoutUserInput, {nullable:false})
    @Type(() => ScheduleUpdateWithoutUserInput)
    update!: ScheduleUpdateWithoutUserInput;

    @Field(() => ScheduleCreateWithoutUserInput, {nullable:false})
    @Type(() => ScheduleCreateWithoutUserInput)
    create!: ScheduleCreateWithoutUserInput;
}
