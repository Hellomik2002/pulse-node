import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BookingReferenceUncheckedCreateNestedManyWithoutBookingInput } from '../booking-reference/booking-reference-unchecked-create-nested-many-without-booking.input';
import { GraphQLJSON } from 'graphql-type-json';
import { AttendeeUncheckedCreateNestedManyWithoutBookingInput } from '../attendee/attendee-unchecked-create-nested-many-without-booking.input';
import { BookingStatus } from '../prisma/booking-status.enum';
import { PaymentUncheckedCreateNestedManyWithoutBookingInput } from '../payment/payment-unchecked-create-nested-many-without-booking.input';
import { WorkflowReminderUncheckedCreateNestedManyWithoutBookingInput } from '../workflow-reminder/workflow-reminder-unchecked-create-nested-many-without-booking.input';
import { BookingCreatescheduledJobsInput } from './booking-createscheduled-jobs.input';

@InputType()
export class BookingUncheckedCreateWithoutDestinationCalendarInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    uid!: string;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => BookingReferenceUncheckedCreateNestedManyWithoutBookingInput, {nullable:true})
    references?: BookingReferenceUncheckedCreateNestedManyWithoutBookingInput;

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

    @Field(() => AttendeeUncheckedCreateNestedManyWithoutBookingInput, {nullable:true})
    attendees?: AttendeeUncheckedCreateNestedManyWithoutBookingInput;

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

    @Field(() => PaymentUncheckedCreateNestedManyWithoutBookingInput, {nullable:true})
    payment?: PaymentUncheckedCreateNestedManyWithoutBookingInput;

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

    @Field(() => WorkflowReminderUncheckedCreateNestedManyWithoutBookingInput, {nullable:true})
    workflowReminders?: WorkflowReminderUncheckedCreateNestedManyWithoutBookingInput;

    @Field(() => BookingCreatescheduledJobsInput, {nullable:true})
    scheduledJobs?: BookingCreatescheduledJobsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;
}
