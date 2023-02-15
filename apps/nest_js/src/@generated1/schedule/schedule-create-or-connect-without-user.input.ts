import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { Type } from 'class-transformer';
import { ScheduleCreateWithoutUserInput } from './schedule-create-without-user.input';

@InputType()
export class ScheduleCreateOrConnectWithoutUserInput {

    @Field(() => ScheduleWhereUniqueInput, {nullable:false})
    @Type(() => ScheduleWhereUniqueInput)
    where!: ScheduleWhereUniqueInput;

    @Field(() => ScheduleCreateWithoutUserInput, {nullable:false})
    @Type(() => ScheduleCreateWithoutUserInput)
    create!: ScheduleCreateWithoutUserInput;
}
