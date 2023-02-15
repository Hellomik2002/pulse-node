import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ScheduleCountAggregate } from './schedule-count-aggregate.output';
import { ScheduleAvgAggregate } from './schedule-avg-aggregate.output';
import { ScheduleSumAggregate } from './schedule-sum-aggregate.output';
import { ScheduleMinAggregate } from './schedule-min-aggregate.output';
import { ScheduleMaxAggregate } from './schedule-max-aggregate.output';

@ObjectType()
export class ScheduleGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    timeZone?: string;

    @Field(() => ScheduleCountAggregate, {nullable:true})
    _count?: ScheduleCountAggregate;

    @Field(() => ScheduleAvgAggregate, {nullable:true})
    _avg?: ScheduleAvgAggregate;

    @Field(() => ScheduleSumAggregate, {nullable:true})
    _sum?: ScheduleSumAggregate;

    @Field(() => ScheduleMinAggregate, {nullable:true})
    _min?: ScheduleMinAggregate;

    @Field(() => ScheduleMaxAggregate, {nullable:true})
    _max?: ScheduleMaxAggregate;
}
