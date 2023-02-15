import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScheduleUpdateManyMutationInput } from './schedule-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ScheduleWhereInput } from './schedule-where.input';

@ArgsType()
export class UpdateManyScheduleArgs {

    @Field(() => ScheduleUpdateManyMutationInput, {nullable:false})
    @Type(() => ScheduleUpdateManyMutationInput)
    data!: ScheduleUpdateManyMutationInput;

    @Field(() => ScheduleWhereInput, {nullable:true})
    @Type(() => ScheduleWhereInput)
    where?: ScheduleWhereInput;
}
