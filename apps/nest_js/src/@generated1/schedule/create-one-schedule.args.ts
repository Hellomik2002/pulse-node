import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScheduleCreateInput } from './schedule-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneScheduleArgs {

    @Field(() => ScheduleCreateInput, {nullable:false})
    @Type(() => ScheduleCreateInput)
    data!: ScheduleCreateInput;
}
