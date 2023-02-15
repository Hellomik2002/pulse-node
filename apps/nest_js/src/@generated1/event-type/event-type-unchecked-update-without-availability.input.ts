import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { HostUncheckedUpdateManyWithoutEventTypeNestedInput } from '../host/host-unchecked-update-many-without-event-type-nested.input';
import { UserUncheckedUpdateManyWithoutEventTypesNestedInput } from '../user/user-unchecked-update-many-without-event-types-nested.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { HashedLinkUncheckedUpdateOneWithoutEventTypeNestedInput } from '../hashed-link/hashed-link-unchecked-update-one-without-event-type-nested.input';
import { BookingUncheckedUpdateManyWithoutEventTypeNestedInput } from '../booking/booking-unchecked-update-many-without-event-type-nested.input';
import { WebhookUncheckedUpdateManyWithoutEventTypeNestedInput } from '../webhook/webhook-unchecked-update-many-without-event-type-nested.input';
import { DestinationCalendarUncheckedUpdateOneWithoutEventTypeNestedInput } from '../destination-calendar/destination-calendar-unchecked-update-one-without-event-type-nested.input';
import { EventTypeCustomInputUncheckedUpdateManyWithoutEventTypeNestedInput } from '../event-type-custom-input/event-type-custom-input-unchecked-update-many-without-event-type-nested.input';
import { EnumPeriodTypeFieldUpdateOperationsInput } from '../prisma/enum-period-type-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { NullableEnumSchedulingTypeFieldUpdateOperationsInput } from '../prisma/nullable-enum-scheduling-type-field-update-operations.input';
import { WorkflowsOnEventTypesUncheckedUpdateManyWithoutEventTypeNestedInput } from '../workflows-on-event-types/workflows-on-event-types-unchecked-update-many-without-event-type-nested.input';

@InputType()
export class EventTypeUncheckedUpdateWithoutAvailabilityInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    position?: IntFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    locations?: any;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    length?: IntFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    hidden?: BoolFieldUpdateOperationsInput;

    @Field(() => HostUncheckedUpdateManyWithoutEventTypeNestedInput, {nullable:true})
    hosts?: HostUncheckedUpdateManyWithoutEventTypeNestedInput;

    @Field(() => UserUncheckedUpdateManyWithoutEventTypesNestedInput, {nullable:true})
    users?: UserUncheckedUpdateManyWithoutEventTypesNestedInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    userId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    teamId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => HashedLinkUncheckedUpdateOneWithoutEventTypeNestedInput, {nullable:true})
    hashedLink?: HashedLinkUncheckedUpdateOneWithoutEventTypeNestedInput;

    @Field(() => BookingUncheckedUpdateManyWithoutEventTypeNestedInput, {nullable:true})
    bookings?: BookingUncheckedUpdateManyWithoutEventTypeNestedInput;

    @Field(() => WebhookUncheckedUpdateManyWithoutEventTypeNestedInput, {nullable:true})
    webhooks?: WebhookUncheckedUpdateManyWithoutEventTypeNestedInput;

    @Field(() => DestinationCalendarUncheckedUpdateOneWithoutEventTypeNestedInput, {nullable:true})
    destinationCalendar?: DestinationCalendarUncheckedUpdateOneWithoutEventTypeNestedInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    eventName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EventTypeCustomInputUncheckedUpdateManyWithoutEventTypeNestedInput, {nullable:true})
    customInputs?: EventTypeCustomInputUncheckedUpdateManyWithoutEventTypeNestedInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    timeZone?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumPeriodTypeFieldUpdateOperationsInput, {nullable:true})
    periodType?: EnumPeriodTypeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    periodStartDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    periodEndDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    periodDays?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    periodCountCalendarDays?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    requiresConfirmation?: BoolFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    recurringEvent?: any;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    disableGuests?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    hideCalendarNotes?: BoolFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    minimumBookingNotice?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    beforeEventBuffer?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    afterEventBuffer?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    seatsPerTimeSlot?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    seatsShowAttendees?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => NullableEnumSchedulingTypeFieldUpdateOperationsInput, {nullable:true})
    schedulingType?: NullableEnumSchedulingTypeFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    scheduleId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    currency?: StringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    slotInterval?: NullableIntFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    successRedirectUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => WorkflowsOnEventTypesUncheckedUpdateManyWithoutEventTypeNestedInput, {nullable:true})
    workflows?: WorkflowsOnEventTypesUncheckedUpdateManyWithoutEventTypeNestedInput;

    @Field(() => GraphQLJSON, {nullable:true})
    bookingLimits?: any;
}
