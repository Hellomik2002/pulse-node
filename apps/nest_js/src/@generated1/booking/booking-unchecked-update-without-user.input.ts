import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BookingReferenceUncheckedUpdateManyWithoutBookingNestedInput } from '../booking-reference/booking-reference-unchecked-update-many-without-booking-nested.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AttendeeUncheckedUpdateManyWithoutBookingNestedInput } from '../attendee/attendee-unchecked-update-many-without-booking-nested.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumBookingStatusFieldUpdateOperationsInput } from '../prisma/enum-booking-status-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { PaymentUncheckedUpdateManyWithoutBookingNestedInput } from '../payment/payment-unchecked-update-many-without-booking-nested.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { WorkflowReminderUncheckedUpdateManyWithoutBookingNestedInput } from '../workflow-reminder/workflow-reminder-unchecked-update-many-without-booking-nested.input';
import { BookingUpdatescheduledJobsInput } from './booking-updatescheduled-jobs.input';

@InputType()
export class BookingUncheckedUpdateWithoutUserInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    uid?: StringFieldUpdateOperationsInput;

    @Field(() => BookingReferenceUncheckedUpdateManyWithoutBookingNestedInput, {nullable:true})
    references?: BookingReferenceUncheckedUpdateManyWithoutBookingNestedInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    eventTypeId?: NullableIntFieldUpdateOperationsInput;

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

    @Field(() => AttendeeUncheckedUpdateManyWithoutBookingNestedInput, {nullable:true})
    attendees?: AttendeeUncheckedUpdateManyWithoutBookingNestedInput;

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

    @Field(() => PaymentUncheckedUpdateManyWithoutBookingNestedInput, {nullable:true})
    payment?: PaymentUncheckedUpdateManyWithoutBookingNestedInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    destinationCalendarId?: NullableIntFieldUpdateOperationsInput;

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

    @Field(() => WorkflowReminderUncheckedUpdateManyWithoutBookingNestedInput, {nullable:true})
    workflowReminders?: WorkflowReminderUncheckedUpdateManyWithoutBookingNestedInput;

    @Field(() => BookingUpdatescheduledJobsInput, {nullable:true})
    scheduledJobs?: BookingUpdatescheduledJobsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;
}
