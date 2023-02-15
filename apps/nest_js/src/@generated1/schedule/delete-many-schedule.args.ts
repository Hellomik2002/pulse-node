import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScheduleWhereInput } from './schedule-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyScheduleArgs {

    @Field(() => ScheduleWhereInput, {nullable:true})
    @Type(() => ScheduleWhereInput)
    where?: ScheduleWhereInput;
}
