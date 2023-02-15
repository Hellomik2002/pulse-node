import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BookingReferenceUpdateManyWithoutBookingNestedInput } from '../booking-reference/booking-reference-update-many-without-booking-nested.input';
import { EventTypeUpdateOneWithoutBookingsNestedInput } from '../event-type/event-type-update-one-without-bookings-nested.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AttendeeUpdateManyWithoutBookingNestedInput } from '../attendee/attendee-update-many-without-booking-nested.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumBookingStatusFieldUpdateOperationsInput } from '../prisma/enum-booking-status-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { PaymentUpdateManyWithoutBookingNestedInput } from '../payment/payment-update-many-without-booking-nested.input';
import { DestinationCalendarUpdateOneWithoutBookingNestedInput } from '../destination-calendar/destination-calendar-update-one-without-booking-nested.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { WorkflowReminderUpdateManyWithoutBookingNestedInput } from '../workflow-reminder/workflow-reminder-update-many-without-booking-nested.input';
import { BookingUpdatescheduledJobsInput } from './booking-updatescheduled-jobs.input';

@InputType()
export class BookingUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    uid?: StringFieldUpdateOperationsInput;

    @Field(() => BookingReferenceUpdateManyWithoutBookingNestedInput, {nullable:true})
    references?: BookingReferenceUpdateManyWithoutBookingNestedInput;

    @Field(() => EventTypeUpdateOneWithoutBookingsNestedInput, {nullable:true})
    eventType?: EventTypeUpdateOneWithoutBookingsNestedInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    customInputs?: any;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    startTime?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    endTime?: DateTimeFieldUpdateOperationsInput;

    @Field(() => AttendeeUpdateManyWithoutBookingNestedInput, {nullable:true})
    attendees?: AttendeeUpdateManyWithoutBookingNestedInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    location?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => EnumBookingStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumBookingStatusFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    paid?: BoolFieldUpdateOperationsInput;

    @Field(() => PaymentUpdateManyWithoutBookingNestedInput, {nullable:true})
    payment?: PaymentUpdateManyWithoutBookingNestedInput;

    @Field(() => DestinationCalendarUpdateOneWithoutBookingNestedInput, {nullable:true})
    destinationCalendar?: DestinationCalendarUpdateOneWithoutBookingNestedInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    cancellationReason?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    rejectionReason?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    dynamicEventSlugRef?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    dynamicGroupSlugRef?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    rescheduled?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    fromReschedule?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    recurringEventId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    smsReminderNumber?: NullableStringFieldUpdateOperationsInput;

    @Field(() => WorkflowReminderUpdateManyWithoutBookingNestedInput, {nullable:true})
    workflowReminders?: WorkflowReminderUpdateManyWithoutBookingNestedInput;

    @Field(() => BookingUpdatescheduledJobsInput, {nullable:true})
    scheduledJobs?: BookingUpdatescheduledJobsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;
}
