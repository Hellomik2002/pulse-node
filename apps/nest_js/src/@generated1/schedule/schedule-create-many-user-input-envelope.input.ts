import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleCreateManyUserInput } from './schedule-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ScheduleCreateManyUserInputEnvelope {

    @Field(() => [ScheduleCreateManyUserInput], {nullable:false})
    @Type(() => ScheduleCreateManyUserInput)
    data!: Array<ScheduleCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
