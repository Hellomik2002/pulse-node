import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Host } from '../host/host.model';
import { User } from '../user/user.model';
import { Team } from '../team/team.model';
import { HashedLink } from '../hashed-link/hashed-link.model';
import { Booking } from '../booking/booking.model';
import { Availability } from '../availability/availability.model';
import { Webhook } from '../webhook/webhook.model';
import { DestinationCalendar } from '../destination-calendar/destination-calendar.model';
import { EventTypeCustomInput } from '../event-type-custom-input/event-type-custom-input.model';
import { PeriodType } from '../prisma/period-type.enum';
import { SchedulingType } from '../prisma/scheduling-type.enum';
import { Schedule } from '../schedule/schedule.model';
import { WorkflowsOnEventTypes } from '../workflows-on-event-types/workflows-on-event-types.model';
import { EventTypeCount } from './event-type-count.output';

@ObjectType()
export class EventType {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Int, {nullable:false,defaultValue:0})
    position!: number;

    @Field(() => GraphQLJSON, {nullable:true})
    locations!: any | null;

    @Field(() => Int, {nullable:false})
    length!: number;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    hidden!: boolean;

    @Field(() => [Host], {nullable:true})
    hosts?: Array<Host>;

    @Field(() => [User], {nullable:true})
    users?: Array<User>;

    @Field(() => User, {nullable:true})
    owner?: User | null;

    @Field(() => Int, {nullable:true})
    userId!: number | null;

    @Field(() => Team, {nullable:true})
    team?: Team | null;

    @Field(() => Int, {nullable:true})
    teamId!: number | null;

    @Field(() => HashedLink, {nullable:true})
    hashedLink?: HashedLink | null;

    @Field(() => [Booking], {nullable:true})
    bookings?: Array<Booking>;

    @Field(() => [Availability], {nullable:true})
    availability?: Array<Availability>;

    @Field(() => [Webhook], {nullable:true})
    webhooks?: Array<Webhook>;

    @Field(() => DestinationCalendar, {nullable:true})
    destinationCalendar?: DestinationCalendar | null;

    @Field(() => String, {nullable:true})
    eventName!: string | null;

    @Field(() => [EventTypeCustomInput], {nullable:true})
    customInputs?: Array<EventTypeCustomInput>;

    @Field(() => String, {nullable:true})
    timeZone!: string | null;

    @Field(() => PeriodType, {nullable:false,defaultValue:'UNLIMITED'})
    periodType!: keyof typeof PeriodType;

    @Field(() => Date, {nullable:true})
    periodStartDate!: Date | null;

    @Field(() => Date, {nullable:true})
    periodEndDate!: Date | null;

    @Field(() => Int, {nullable:true})
    periodDays!: number | null;

    @Field(() => Boolean, {nullable:true})
    periodCountCalendarDays!: boolean | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    requiresConfirmation!: boolean;

    @Field(() => GraphQLJSON, {nullable:true})
    recurringEvent!: any | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    disableGuests!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    hideCalendarNotes!: boolean;

    @Field(() => Int, {nullable:false,defaultValue:120})
    minimumBookingNotice!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    beforeEventBuffer!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    afterEventBuffer!: number;

    @Field(() => Int, {nullable:true})
    seatsPerTimeSlot!: number | null;

    @Field(() => Boolean, {nullable:true,defaultValue:false})
    seatsShowAttendees!: boolean | null;

    @Field(() => SchedulingType, {nullable:true})
    schedulingType!: keyof typeof SchedulingType | null;

    @Field(() => Schedule, {nullable:true})
    schedule?: Schedule | null;

    @Field(() => Int, {nullable:true})
    scheduleId!: number | null;

    @Field(() => Int, {nullable:false,defaultValue:0})
    price!: number;

    @Field(() => String, {nullable:false,defaultValue:'usd'})
    currency!: string;

    @Field(() => Int, {nullable:true})
    slotInterval!: number | null;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata!: any | null;

    @Field(() => String, {nullable:true})
    successRedirectUrl!: string | null;

    @Field(() => [WorkflowsOnEventTypes], {nullable:true})
    workflows?: Array<WorkflowsOnEventTypes>;

    @Field(() => GraphQLJSON, {nullable:true})
    bookingLimits!: any | null;

    @Field(() => EventTypeCount, {nullable:false})
    _count?: EventTypeCount;
}
