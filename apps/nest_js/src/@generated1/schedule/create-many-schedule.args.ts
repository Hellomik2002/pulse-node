import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScheduleCreateManyInput } from './schedule-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyScheduleArgs {

    @Field(() => [ScheduleCreateManyInput], {nullable:false})
    @Type(() => ScheduleCreateManyInput)
    data!: Array<ScheduleCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
