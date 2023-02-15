import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { Type } from 'class-transformer';
import { ScheduleCreateInput } from './schedule-create.input';
import { ScheduleUpdateInput } from './schedule-update.input';

@ArgsType()
export class UpsertOneScheduleArgs {

    @Field(() => ScheduleWhereUniqueInput, {nullable:false})
    @Type(() => ScheduleWhereUniqueInput)
    where!: ScheduleWhereUniqueInput;

    @Field(() => ScheduleCreateInput, {nullable:false})
    @Type(() => ScheduleCreateInput)
    create!: ScheduleCreateInput;

    @Field(() => ScheduleUpdateInput, {nullable:false})
    @Type(() => ScheduleUpdateInput)
    update!: ScheduleUpdateInput;
}
