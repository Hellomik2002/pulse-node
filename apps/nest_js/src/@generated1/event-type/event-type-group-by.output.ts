import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { PeriodType } from '../prisma/period-type.enum';
import { SchedulingType } from '../prisma/scheduling-type.enum';
import { EventTypeCountAggregate } from './event-type-count-aggregate.output';
import { EventTypeAvgAggregate } from './event-type-avg-aggregate.output';
import { EventTypeSumAggregate } from './event-type-sum-aggregate.output';
import { EventTypeMinAggregate } from './event-type-min-aggregate.output';
import { EventTypeMaxAggregate } from './event-type-max-aggregate.output';

@ObjectType()
export class EventTypeGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:false})
    position!: number;

    @Field(() => GraphQLJSON, {nullable:true})
    locations?: any;

    @Field(() => Int, {nullable:false})
    length!: number;

    @Field(() => Boolean, {nullable:false})
    hidden!: boolean;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    teamId?: number;

    @Field(() => String, {nullable:true})
    eventName?: string;

    @Field(() => String, {nullable:true})
    timeZone?: string;

    @Field(() => PeriodType, {nullable:false})
    periodType!: keyof typeof PeriodType;

    @Field(() => Date, {nullable:true})
    periodStartDate?: Date | string;

    @Field(() => Date, {nullable:true})
    periodEndDate?: Date | string;

    @Field(() => Int, {nullable:true})
    periodDays?: number;

    @Field(() => Boolean, {nullable:true})
    periodCountCalendarDays?: boolean;

    @Field(() => Boolean, {nullable:false})
    requiresConfirmation!: boolean;

    @Field(() => GraphQLJSON, {nullable:true})
    recurringEvent?: any;

    @Field(() => Boolean, {nullable:false})
    disableGuests!: boolean;

    @Field(() => Boolean, {nullable:false})
    hideCalendarNotes!: boolean;

    @Field(() => Int, {nullable:false})
    minimumBookingNotice!: number;

    @Field(() => Int, {nullable:false})
    beforeEventBuffer!: number;

    @Field(() => Int, {nullable:false})
    afterEventBuffer!: number;

    @Field(() => Int, {nullable:true})
    seatsPerTimeSlot?: number;

    @Field(() => Boolean, {nullable:true})
    seatsShowAttendees?: boolean;

    @Field(() => SchedulingType, {nullable:true})
    schedulingType?: keyof typeof SchedulingType;

    @Field(() => Int, {nullable:true})
    scheduleId?: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => Int, {nullable:true})
    slotInterval?: number;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => String, {nullable:true})
    successRedirectUrl?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    bookingLimits?: any;

    @Field(() => EventTypeCountAggregate, {nullable:true})
    _count?: EventTypeCountAggregate;

    @Field(() => EventTypeAvgAggregate, {nullable:true})
    _avg?: EventTypeAvgAggregate;

    @Field(() => EventTypeSumAggregate, {nullable:true})
    _sum?: EventTypeSumAggregate;

    @Field(() => EventTypeMinAggregate, {nullable:true})
    _min?: EventTypeMinAggregate;

    @Field(() => EventTypeMaxAggregate, {nullable:true})
    _max?: EventTypeMaxAggregate;
}
