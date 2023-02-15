import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { HostCreateNestedManyWithoutEventTypeInput } from '../host/host-create-nested-many-without-event-type.input';
import { UserCreateNestedManyWithoutEventTypesInput } from '../user/user-create-nested-many-without-event-types.input';
import { UserCreateNestedOneWithoutOwnedEventTypesInput } from '../user/user-create-nested-one-without-owned-event-types.input';
import { TeamCreateNestedOneWithoutEventTypesInput } from '../team/team-create-nested-one-without-event-types.input';
import { HashedLinkCreateNestedOneWithoutEventTypeInput } from '../hashed-link/hashed-link-create-nested-one-without-event-type.input';
import { BookingCreateNestedManyWithoutEventTypeInput } from '../booking/booking-create-nested-many-without-event-type.input';
import { WebhookCreateNestedManyWithoutEventTypeInput } from '../webhook/webhook-create-nested-many-without-event-type.input';
import { DestinationCalendarCreateNestedOneWithoutEventTypeInput } from '../destination-calendar/destination-calendar-create-nested-one-without-event-type.input';
import { EventTypeCustomInputCreateNestedManyWithoutEventTypeInput } from '../event-type-custom-input/event-type-custom-input-create-nested-many-without-event-type.input';
import { PeriodType } from '../prisma/period-type.enum';
import { SchedulingType } from '../prisma/scheduling-type.enum';
import { ScheduleCreateNestedOneWithoutEventTypeInput } from '../schedule/schedule-create-nested-one-without-event-type.input';
import { WorkflowsOnEventTypesCreateNestedManyWithoutEventTypeInput } from '../workflows-on-event-types/workflows-on-event-types-create-nested-many-without-event-type.input';

@InputType()
export class EventTypeCreateWithoutAvailabilityInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:true})
    position?: number;

    @Field(() => GraphQLJSON, {nullable:true})
    locations?: any;

    @Field(() => Int, {nullable:false})
    length!: number;

    @Field(() => Boolean, {nullable:true})
    hidden?: boolean;

    @Field(() => HostCreateNestedManyWithoutEventTypeInput, {nullable:true})
    hosts?: HostCreateNestedManyWithoutEventTypeInput;

    @Field(() => UserCreateNestedManyWithoutEventTypesInput, {nullable:true})
    users?: UserCreateNestedManyWithoutEventTypesInput;

    @Field(() => UserCreateNestedOneWithoutOwnedEventTypesInput, {nullable:true})
    owner?: UserCreateNestedOneWithoutOwnedEventTypesInput;

    @Field(() => TeamCreateNestedOneWithoutEventTypesInput, {nullable:true})
    team?: TeamCreateNestedOneWithoutEventTypesInput;

    @Field(() => HashedLinkCreateNestedOneWithoutEventTypeInput, {nullable:true})
    hashedLink?: HashedLinkCreateNestedOneWithoutEventTypeInput;

    @Field(() => BookingCreateNestedManyWithoutEventTypeInput, {nullable:true})
    bookings?: BookingCreateNestedManyWithoutEventTypeInput;

    @Field(() => WebhookCreateNestedManyWithoutEventTypeInput, {nullable:true})
    webhooks?: WebhookCreateNestedManyWithoutEventTypeInput;

    @Field(() => DestinationCalendarCreateNestedOneWithoutEventTypeInput, {nullable:true})
    destinationCalendar?: DestinationCalendarCreateNestedOneWithoutEventTypeInput;

    @Field(() => String, {nullable:true})
    eventName?: string;

    @Field(() => EventTypeCustomInputCreateNestedManyWithoutEventTypeInput, {nullable:true})
    customInputs?: EventTypeCustomInputCreateNestedManyWithoutEventTypeInput;

    @Field(() => String, {nullable:true})
    timeZone?: string;

    @Field(() => PeriodType, {nullable:true})
    periodType?: keyof typeof PeriodType;

    @Field(() => Date, {nullable:true})
    periodStartDate?: Date | string;

    @Field(() => Date, {nullable:true})
    periodEndDate?: Date | string;

    @Field(() => Int, {nullable:true})
    periodDays?: number;

    @Field(() => Boolean, {nullable:true})
    periodCountCalendarDays?: boolean;

    @Field(() => Boolean, {nullable:true})
    requiresConfirmation?: boolean;

    @Field(() => GraphQLJSON, {nullable:true})
    recurringEvent?: any;

    @Field(() => Boolean, {nullable:true})
    disableGuests?: boolean;

    @Field(() => Boolean, {nullable:true})
    hideCalendarNotes?: boolean;

    @Field(() => Int, {nullable:true})
    minimumBookingNotice?: number;

    @Field(() => Int, {nullable:true})
    beforeEventBuffer?: number;

    @Field(() => Int, {nullable:true})
    afterEventBuffer?: number;

    @Field(() => Int, {nullable:true})
    seatsPerTimeSlot?: number;

    @Field(() => Boolean, {nullable:true})
    seatsShowAttendees?: boolean;

    @Field(() => SchedulingType, {nullable:true})
    schedulingType?: keyof typeof SchedulingType;

    @Field(() => ScheduleCreateNestedOneWithoutEventTypeInput, {nullable:true})
    schedule?: ScheduleCreateNestedOneWithoutEventTypeInput;

    @Field(() => Int, {nullable:true})
    price?: number;

    @Field(() => String, {nullable:true})
    currency?: string;

    @Field(() => Int, {nullable:true})
    slotInterval?: number;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => String, {nullable:true})
    successRedirectUrl?: string;

    @Field(() => WorkflowsOnEventTypesCreateNestedManyWithoutEventTypeInput, {nullable:true})
    workflows?: WorkflowsOnEventTypesCreateNestedManyWithoutEventTypeInput;

    @Field(() => GraphQLJSON, {nullable:true})
    bookingLimits?: any;
}
