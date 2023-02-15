import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SelectedCalendarCountAggregate } from './selected-calendar-count-aggregate.output';
import { SelectedCalendarAvgAggregate } from './selected-calendar-avg-aggregate.output';
import { SelectedCalendarSumAggregate } from './selected-calendar-sum-aggregate.output';
import { SelectedCalendarMinAggregate } from './selected-calendar-min-aggregate.output';
import { SelectedCalendarMaxAggregate } from './selected-calendar-max-aggregate.output';

@ObjectType()
export class SelectedCalendarGroupBy {

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    integration!: string;

    @Field(() => String, {nullable:false})
    externalId!: string;

    @Field(() => SelectedCalendarCountAggregate, {nullable:true})
    _count?: SelectedCalendarCountAggregate;

    @Field(() => SelectedCalendarAvgAggregate, {nullable:true})
    _avg?: SelectedCalendarAvgAggregate;

    @Field(() => SelectedCalendarSumAggregate, {nullable:true})
    _sum?: SelectedCalendarSumAggregate;

    @Field(() => SelectedCalendarMinAggregate, {nullable:true})
    _min?: SelectedCalendarMinAggregate;

    @Field(() => SelectedCalendarMaxAggregate, {nullable:true})
    _max?: SelectedCalendarMaxAggregate;
}
