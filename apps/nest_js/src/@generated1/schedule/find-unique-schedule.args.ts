import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueScheduleArgs {

    @Field(() => ScheduleWhereUniqueInput, {nullable:false})
    @Type(() => ScheduleWhereUniqueInput)
    where!: ScheduleWhereUniqueInput;
}
