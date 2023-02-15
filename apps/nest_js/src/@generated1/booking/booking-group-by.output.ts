import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { BookingStatus } from '../prisma/booking-status.enum';
import { BookingCountAggregate } from './booking-count-aggregate.output';
import { BookingAvgAggregate } from './booking-avg-aggregate.output';
import { BookingSumAggregate } from './booking-sum-aggregate.output';
import { BookingMinAggregate } from './booking-min-aggregate.output';
import { BookingMaxAggregate } from './booking-max-aggregate.output';

@ObjectType()
export class BookingGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    uid!: string;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    eventTypeId?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    customInputs?: any;

    @Field(() => Date, {nullable:false})
    startTime!: Date | string;

    @Field(() => Date, {nullable:false})
    endTime!: Date | string;

    @Field(() => String, {nullable:true})
    location?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => BookingStatus, {nullable:false})
    status!: keyof typeof BookingStatus;

    @Field(() => Boolean, {nullable:false})
    paid!: boolean;

    @Field(() => Int, {nullable:true})
    destinationCalendarId?: number;

    @Field(() => String, {nullable:true})
    cancellationReason?: string;

    @Field(() => String, {nullable:true})
    rejectionReason?: string;

    @Field(() => String, {nullable:true})
    dynamicEventSlugRef?: string;

    @Field(() => String, {nullable:true})
    dynamicGroupSlugRef?: string;

    @Field(() => Boolean, {nullable:true})
    rescheduled?: boolean;

    @Field(() => String, {nullable:true})
    fromReschedule?: string;

    @Field(() => String, {nullable:true})
    recurringEventId?: string;

    @Field(() => String, {nullable:true})
    smsReminderNumber?: string;

    @Field(() => [String], {nullable:true})
    scheduledJobs?: Array<string>;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => BookingCountAggregate, {nullable:true})
    _count?: BookingCountAggregate;

    @Field(() => BookingAvgAggregate, {nullable:true})
    _avg?: BookingAvgAggregate;

    @Field(() => BookingSumAggregate, {nullable:true})
    _sum?: BookingSumAggregate;

    @Field(() => BookingMinAggregate, {nullable:true})
    _min?: BookingMinAggregate;

    @Field(() => BookingMaxAggregate, {nullable:true})
    _max?: BookingMaxAggregate;
}
