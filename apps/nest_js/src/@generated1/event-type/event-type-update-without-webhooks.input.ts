import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { HostUpdateManyWithoutEventTypeNestedInput } from '../host/host-update-many-without-event-type-nested.input';
import { UserUpdateManyWithoutEventTypesNestedInput } from '../user/user-update-many-without-event-types-nested.input';
import { UserUpdateOneWithoutOwnedEventTypesNestedInput } from '../user/user-update-one-without-owned-event-types-nested.input';
import { TeamUpdateOneWithoutEventTypesNestedInput } from '../team/team-update-one-without-event-types-nested.input';
import { HashedLinkUpdateOneWithoutEventTypeNestedInput } from '../hashed-link/hashed-link-update-one-without-event-type-nested.input';
import { BookingUpdateManyWithoutEventTypeNestedInput } from '../booking/booking-update-many-without-event-type-nested.input';
import { AvailabilityUpdateManyWithoutEventTypeNestedInput } from '../availability/availability-update-many-without-event-type-nested.input';
import { DestinationCalendarUpdateOneWithoutEventTypeNestedInput } from '../destination-calendar/destination-calendar-update-one-without-event-type-nested.input';
import { EventTypeCustomInputUpdateManyWithoutEventTypeNestedInput } from '../event-type-custom-input/event-type-custom-input-update-many-without-event-type-nested.input';
import { EnumPeriodTypeFieldUpdateOperationsInput } from '../prisma/enum-period-type-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { NullableEnumSchedulingTypeFieldUpdateOperationsInput } from '../prisma/nullable-enum-scheduling-type-field-update-operations.input';
import { ScheduleUpdateOneWithoutEventTypeNestedInput } from '../schedule/schedule-update-one-without-event-type-nested.input';
import { WorkflowsOnEventTypesUpdateManyWithoutEventTypeNestedInput } from '../workflows-on-event-types/workflows-on-event-types-update-many-without-event-type-nested.input';

@InputType()
export class EventTypeUpdateWithoutWebhooksInput {

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

    @Field(() => HostUpdateManyWithoutEventTypeNestedInput, {nullable:true})
    hosts?: HostUpdateManyWithoutEventTypeNestedInput;

    @Field(() => UserUpdateManyWithoutEventTypesNestedInput, {nullable:true})
    users?: UserUpdateManyWithoutEventTypesNestedInput;

    @Field(() => UserUpdateOneWithoutOwnedEventTypesNestedInput, {nullable:true})
    owner?: UserUpdateOneWithoutOwnedEventTypesNestedInput;

    @Field(() => TeamUpdateOneWithoutEventTypesNestedInput, {nullable:true})
    team?: TeamUpdateOneWithoutEventTypesNestedInput;

    @Field(() => HashedLinkUpdateOneWithoutEventTypeNestedInput, {nullable:true})
    hashedLink?: HashedLinkUpdateOneWithoutEventTypeNestedInput;

    @Field(() => BookingUpdateManyWithoutEventTypeNestedInput, {nullable:true})
    bookings?: BookingUpdateManyWithoutEventTypeNestedInput;

    @Field(() => AvailabilityUpdateManyWithoutEventTypeNestedInput, {nullable:true})
    availability?: AvailabilityUpdateManyWithoutEventTypeNestedInput;

    @Field(() => DestinationCalendarUpdateOneWithoutEventTypeNestedInput, {nullable:true})
    destinationCalendar?: DestinationCalendarUpdateOneWithoutEventTypeNestedInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    eventName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EventTypeCustomInputUpdateManyWithoutEventTypeNestedInput, {nullable:true})
    customInputs?: EventTypeCustomInputUpdateManyWithoutEventTypeNestedInput;

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

    @Field(() => ScheduleUpdateOneWithoutEventTypeNestedInput, {nullable:true})
    schedule?: ScheduleUpdateOneWithoutEventTypeNestedInput;

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

    @Field(() => WorkflowsOnEventTypesUpdateManyWithoutEventTypeNestedInput, {nullable:true})
    workflows?: WorkflowsOnEventTypesUpdateManyWithoutEventTypeNestedInput;

    @Field(() => GraphQLJSON, {nullable:true})
    bookingLimits?: any;
}
