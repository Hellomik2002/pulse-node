import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutBookingsInput } from '../user/user-create-nested-one-without-bookings.input';
import { BookingReferenceCreateNestedManyWithoutBookingInput } from '../booking-reference/booking-reference-create-nested-many-without-booking.input';
import { EventTypeCreateNestedOneWithoutBookingsInput } from '../event-type/event-type-create-nested-one-without-bookings.input';
import { GraphQLJSON } from 'graphql-type-json';
import { AttendeeCreateNestedManyWithoutBookingInput } from '../attendee/attendee-create-nested-many-without-booking.input';
import { BookingStatus } from '../prisma/booking-status.enum';
import { DestinationCalendarCreateNestedOneWithoutBookingInput } from '../destination-calendar/destination-calendar-create-nested-one-without-booking.input';
import { WorkflowReminderCreateNestedManyWithoutBookingInput } from '../workflow-reminder/workflow-reminder-create-nested-many-without-booking.input';
import { BookingCreatescheduledJobsInput } from './booking-createscheduled-jobs.input';

@InputType()
export class BookingCreateWithoutPaymentInput {

    @Field(() => String, {nullable:false})
    uid!: string;

    @Field(() => UserCreateNestedOneWithoutBookingsInput, {nullable:true})
    user?: UserCreateNestedOneWithoutBookingsInput;

    @Field(() => BookingReferenceCreateNestedManyWithoutBookingInput, {nullable:true})
    references?: BookingReferenceCreateNestedManyWithoutBookingInput;

    @Field(() => EventTypeCreateNestedOneWithoutBookingsInput, {nullable:true})
    eventType?: EventTypeCreateNestedOneWithoutBookingsInput;

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

    @Field(() => AttendeeCreateNestedManyWithoutBookingInput, {nullable:true})
    attendees?: AttendeeCreateNestedManyWithoutBookingInput;

    @Field(() => String, {nullable:true})
    location?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => BookingStatus, {nullable:true})
    status?: keyof typeof BookingStatus;

    @Field(() => Boolean, {nullable:true})
    paid?: boolean;

    @Field(() => DestinationCalendarCreateNestedOneWithoutBookingInput, {nullable:true})
    destinationCalendar?: DestinationCalendarCreateNestedOneWithoutBookingInput;

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

    @Field(() => WorkflowReminderCreateNestedManyWithoutBookingInput, {nullable:true})
    workflowReminders?: WorkflowReminderCreateNestedManyWithoutBookingInput;

    @Field(() => BookingCreatescheduledJobsInput, {nullable:true})
    scheduledJobs?: BookingCreatescheduledJobsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;
}
