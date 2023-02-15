import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleScalarWhereInput } from './schedule-scalar-where.input';
import { Type } from 'class-transformer';
import { ScheduleUpdateManyMutationInput } from './schedule-update-many-mutation.input';

@InputType()
export class ScheduleUpdateManyWithWhereWithoutUserInput {

    @Field(() => ScheduleScalarWhereInput, {nullable:false})
    @Type(() => ScheduleScalarWhereInput)
    where!: ScheduleScalarWhereInput;

    @Field(() => ScheduleUpdateManyMutationInput, {nullable:false})
    @Type(() => ScheduleUpdateManyMutationInput)
    data!: ScheduleUpdateManyMutationInput;
}
