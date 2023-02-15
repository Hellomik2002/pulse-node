import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScheduleWhereInput } from './schedule-where.input';
import { Type } from 'class-transformer';
import { ScheduleOrderByWithAggregationInput } from './schedule-order-by-with-aggregation.input';
import { ScheduleScalarFieldEnum } from './schedule-scalar-field.enum';
import { ScheduleScalarWhereWithAggregatesInput } from './schedule-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ScheduleCountAggregateInput } from './schedule-count-aggregate.input';
import { ScheduleAvgAggregateInput } from './schedule-avg-aggregate.input';
import { ScheduleSumAggregateInput } from './schedule-sum-aggregate.input';
import { ScheduleMinAggregateInput } from './schedule-min-aggregate.input';
import { ScheduleMaxAggregateInput } from './schedule-max-aggregate.input';

@ArgsType()
export class ScheduleGroupByArgs {

    @Field(() => ScheduleWhereInput, {nullable:true})
    @Type(() => ScheduleWhereInput)
    where?: ScheduleWhereInput;

    @Field(() => [ScheduleOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ScheduleOrderByWithAggregationInput>;

    @Field(() => [ScheduleScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ScheduleScalarFieldEnum>;

    @Field(() => ScheduleScalarWhereWithAggregatesInput, {nullable:true})
    having?: ScheduleScalarWhereWithAggregatesInput;

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
