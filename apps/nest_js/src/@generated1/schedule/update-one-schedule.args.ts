import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScheduleUpdateInput } from './schedule-update.input';
import { Type } from 'class-transformer';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';

@ArgsType()
export class UpdateOneScheduleArgs {

    @Field(() => ScheduleUpdateInput, {nullable:false})
    @Type(() => ScheduleUpdateInput)
    data!: ScheduleUpdateInput;

    @Field(() => ScheduleWhereUniqueInput, {nullable:false})
    @Type(() => ScheduleWhereUniqueInput)
    where!: ScheduleWhereUniqueInput;
}
