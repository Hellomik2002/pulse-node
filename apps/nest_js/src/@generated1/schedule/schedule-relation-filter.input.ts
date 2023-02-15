import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleWhereInput } from './schedule-where.input';

@InputType()
export class ScheduleRelationFilter {

    @Field(() => ScheduleWhereInput, {nullable:true})
    is?: ScheduleWhereInput;

    @Field(() => ScheduleWhereInput, {nullable:true})
    isNot?: ScheduleWhereInput;
}
