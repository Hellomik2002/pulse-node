import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EventTypeCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    slug!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    position!: number;

    @Field(() => Int, {nullable:false})
    locations!: number;

    @Field(() => Int, {nullable:false})
    length!: number;

    @Field(() => Int, {nullable:false})
    hidden!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    teamId!: number;

    @Field(() => Int, {nullable:false})
    eventName!: number;

    @Field(() => Int, {nullable:false})
    timeZone!: number;

    @Field(() => Int, {nullable:false})
    periodType!: number;

    @Field(() => Int, {nullable:false})
    periodStartDate!: number;

    @Field(() => Int, {nullable:false})
    periodEndDate!: number;

    @Field(() => Int, {nullable:false})
    periodDays!: number;

    @Field(() => Int, {nullable:false})
    periodCountCalendarDays!: number;

    @Field(() => Int, {nullable:false})
    requiresConfirmation!: number;

    @Field(() => Int, {nullable:false})
    recurringEvent!: number;

    @Field(() => Int, {nullable:false})
    disableGuests!: number;

    @Field(() => Int, {nullable:false})
    hideCalendarNotes!: number;

    @Field(() => Int, {nullable:false})
    minimumBookingNotice!: number;

    @Field(() => Int, {nullable:false})
    beforeEventBuffer!: number;

    @Field(() => Int, {nullable:false})
    afterEventBuffer!: number;

    @Field(() => Int, {nullable:false})
    seatsPerTimeSlot!: number;

    @Field(() => Int, {nullable:false})
    seatsShowAttendees!: number;

    @Field(() => Int, {nullable:false})
    schedulingType!: number;

    @Field(() => Int, {nullable:false})
    scheduleId!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Int, {nullable:false})
    currency!: number;

    @Field(() => Int, {nullable:false})
    slotInterval!: number;

    @Field(() => Int, {nullable:false})
    metadata!: number;

    @Field(() => Int, {nullable:false})
    successRedirectUrl!: number;

    @Field(() => Int, {nullable:false})
    bookingLimits!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
