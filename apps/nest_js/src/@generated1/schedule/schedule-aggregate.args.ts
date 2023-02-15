import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScheduleWhereInput } from './schedule-where.input';
import { Type } from 'class-transformer';
import { ScheduleOrderByWithRelationInput } from './schedule-order-by-with-relation.input';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ScheduleCountAggregateInput } from './schedule-count-aggregate.input';
import { ScheduleAvgAggregateInput } from './schedule-avg-aggregate.input';
import { ScheduleSumAggregateInput } from './schedule-sum-aggregate.input';
import { ScheduleMinAggregateInput } from './schedule-min-aggregate.input';
import { ScheduleMaxAggregateInput } from './schedule-max-aggregate.input';

@ArgsType()
export class ScheduleAggregateArgs {

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

    @Field(() => ScheduleCountAggregateInput, {nullable:true})
    _count?: ScheduleCountAggregateInput;

    @Field(() => ScheduleAvgAggregateInput, {nullable:true})
    _avg?: ScheduleAvgAggregateInput;

    @Field(() => ScheduleSumAggregateInput, {nullable:true})
    _sum?: ScheduleSumAggregateInput;

    @Field(() => ScheduleMinAggregateInput, {nullable:true})
    _min?: ScheduleMinAggregateInput;

    @Field(() => ScheduleMaxAggregateInput, {nullable:true})
    _max?: ScheduleMaxAggregateInput;
}
