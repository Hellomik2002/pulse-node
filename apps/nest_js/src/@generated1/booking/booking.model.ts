import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';
import { BookingReference } from '../booking-reference/booking-reference.model';
import { EventType } from '../event-type/event-type.model';
import { GraphQLJSON } from 'graphql-type-json';
import { Attendee } from '../attendee/attendee.model';
import { BookingStatus } from '../prisma/booking-status.enum';
import { Payment } from '../payment/payment.model';
import { DestinationCalendar } from '../destination-calendar/destination-calendar.model';
import { WorkflowReminder } from '../workflow-reminder/workflow-reminder.model';
import { BookingCount } from './booking-count.output';

@ObjectType()
export class Booking {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    uid!: string;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => Int, {nullable:true})
    userId!: number | null;

    @Field(() => [BookingReference], {nullable:true})
    references?: Array<BookingReference>;

    @Field(() => EventType, {nullable:true})
    eventType?: EventType | null;

    @Field(() => Int, {nullable:true})
    eventTypeId!: number | null;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    customInputs!: any | null;

    @Field(() => Date, {nullable:false})
    startTime!: Date;

    @Field(() => Date, {nullable:false})
    endTime!: Date;

    @Field(() => [Attendee], {nullable:true})
    attendees?: Array<Attendee>;

    @Field(() => String, {nullable:true})
    location!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => BookingStatus, {nullable:false,defaultValue:'ACCEPTED'})
    status!: keyof typeof BookingStatus;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    paid!: boolean;

    @Field(() => [Payment], {nullable:true})
    payment?: Array<Payment>;

    @Field(() => DestinationCalendar, {nullable:true})
    destinationCalendar?: DestinationCalendar | null;

    @Field(() => Int, {nullable:true})
    destinationCalendarId!: number | null;

    @Field(() => String, {nullable:true})
    cancellationReason!: string | null;

    @Field(() => String, {nullable:true})
    rejectionReason!: string | null;

    @Field(() => String, {nullable:true})
    dynamicEventSlugRef!: string | null;

    @Field(() => String, {nullable:true})
    dynamicGroupSlugRef!: string | null;

    @Field(() => Boolean, {nullable:true})
    rescheduled!: boolean | null;

    @Field(() => String, {nullable:true})
    fromReschedule!: string | null;

    @Field(() => String, {nullable:true})
    recurringEventId!: string | null;

    @Field(() => String, {nullable:true})
    smsReminderNumber!: string | null;

    @Field(() => [WorkflowReminder], {nullable:true})
    workflowReminders?: Array<WorkflowReminder>;

    @Field(() => [String], {nullable:true})
    scheduledJobs!: Array<string>;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata!: any | null;

    @Field(() => BookingCount, {nullable:false})
    _count?: BookingCount;
}
