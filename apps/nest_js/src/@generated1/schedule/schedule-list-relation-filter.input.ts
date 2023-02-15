import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleWhereInput } from './schedule-where.input';

@InputType()
export class ScheduleListRelationFilter {

    @Field(() => ScheduleWhereInput, {nullable:true})
    every?: ScheduleWhereInput;

    @Field(() => ScheduleWhereInput, {nullable:true})
    some?: ScheduleWhereInput;

    @Field(() => ScheduleWhereInput, {nullable:true})
    none?: ScheduleWhereInput;
}
