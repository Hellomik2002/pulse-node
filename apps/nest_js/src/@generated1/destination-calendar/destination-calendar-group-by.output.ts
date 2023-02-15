import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DestinationCalendarCountAggregate } from './destination-calendar-count-aggregate.output';
import { DestinationCalendarAvgAggregate } from './destination-calendar-avg-aggregate.output';
import { DestinationCalendarSumAggregate } from './destination-calendar-sum-aggregate.output';
import { DestinationCalendarMinAggregate } from './destination-calendar-min-aggregate.output';
import { DestinationCalendarMaxAggregate } from './destination-calendar-max-aggregate.output';

@ObjectType()
export class DestinationCalendarGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    integration!: string;

    @Field(() => String, {nullable:false})
    externalId!: string;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    eventTypeId?: number;

    @Field(() => Int, {nullable:true})
    credentialId?: number;

    @Field(() => DestinationCalendarCountAggregate, {nullable:true})
    _count?: DestinationCalendarCountAggregate;

    @Field(() => DestinationCalendarAvgAggregate, {nullable:true})
    _avg?: DestinationCalendarAvgAggregate;

    @Field(() => DestinationCalendarSumAggregate, {nullable:true})
    _sum?: DestinationCalendarSumAggregate;

    @Field(() => DestinationCalendarMinAggregate, {nullable:true})
    _min?: DestinationCalendarMinAggregate;

    @Field(() => DestinationCalendarMaxAggregate, {nullable:true})
    _max?: DestinationCalendarMaxAggregate;
}
