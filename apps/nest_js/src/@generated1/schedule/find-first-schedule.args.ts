import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScheduleWhereInput } from './schedule-where.input';
import { Type } from 'class-transformer';
import { ScheduleOrderByWithRelationInput } from './schedule-order-by-with-relation.input';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ScheduleScalarFieldEnum } from './schedule-scalar-field.enum';

@ArgsType()
export class FindFirstScheduleArgs {

    @Field(() => ScheduleWhereInput, {nullable:true})
    @Type(() => ScheduleWhereInput)
    where?: ScheduleWhereInput;

    @Field(() => [ScheduleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ScheduleOrderByWithRelationInput>;

    @Field(() => ScheduleWhereUniqueInput, {nullable:true})
    cursor?: ScheduleWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ScheduleScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ScheduleScalarFieldEnum>;
}
