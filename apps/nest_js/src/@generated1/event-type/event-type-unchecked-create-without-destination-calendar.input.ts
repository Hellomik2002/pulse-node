import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { HostUncheckedCreateNestedManyWithoutEventTypeInput } from '../host/host-unchecked-create-nested-many-without-event-type.input';
import { UserUncheckedCreateNestedManyWithoutEventTypesInput } from '../user/user-unchecked-create-nested-many-without-event-types.input';
import { HashedLinkUncheckedCreateNestedOneWithoutEventTypeInput } from '../hashed-link/hashed-link-unchecked-create-nested-one-without-event-type.input';
import { BookingUncheckedCreateNestedManyWithoutEventTypeInput } from '../booking/booking-unchecked-create-nested-many-without-event-type.input';
import { AvailabilityUncheckedCreateNestedManyWithoutEventTypeInput } from '../availability/availability-unchecked-create-nested-many-without-event-type.input';
import { WebhookUncheckedCreateNestedManyWithoutEventTypeInput } from '../webhook/webhook-unchecked-create-nested-many-without-event-type.input';
import { EventTypeCustomInputUncheckedCreateNestedManyWithoutEventTypeInput } from '../event-type-custom-input/event-type-custom-input-unchecked-create-nested-many-without-event-type.input';
import { PeriodType } from '../prisma/period-type.enum';
import { SchedulingType } from '../prisma/scheduling-type.enum';
import { WorkflowsOnEventTypesUncheckedCreateNestedManyWithoutEventTypeInput } from '../workflows-on-event-types/workflows-on-event-types-unchecked-create-nested-many-without-event-type.input';

@InputType()
export class EventTypeUncheckedCreateWithoutDestinationCalendarInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => HostUncheckedCreateNestedManyWithoutEventTypeInput, {nullable:true})
    hosts?: HostUncheckedCreateNestedManyWithoutEventTypeInput;

    @Field(() => UserUncheckedCreateNestedManyWithoutEventTypesInput, {nullable:true})
    users?: UserUncheckedCreateNestedManyWithoutEventTypesInput;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    teamId?: number;

    @Field(() => HashedLinkUncheckedCreateNestedOneWithoutEventTypeInput, {nullable:true})
    hashedLink?: HashedLinkUncheckedCreateNestedOneWithoutEventTypeInput;

    @Field(() => BookingUncheckedCreateNestedManyWithoutEventTypeInput, {nullable:true})
    bookings?: BookingUncheckedCreateNestedManyWithoutEventTypeInput;

    @Field(() => AvailabilityUncheckedCreateNestedManyWithoutEventTypeInput, {nullable:true})
    availability?: AvailabilityUncheckedCreateNestedManyWithoutEventTypeInput;

    @Field(() => WebhookUncheckedCreateNestedManyWithoutEventTypeInput, {nullable:true})
    webhooks?: WebhookUncheckedCreateNestedManyWithoutEventTypeInput;

    @Field(() => String, {nullable:true})
    eventName?: string;

    @Field(() => EventTypeCustomInputUncheckedCreateNestedManyWithoutEventTypeInput, {nullable:true})
    customInputs?: EventTypeCustomInputUncheckedCreateNestedManyWithoutEventTypeInput;

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

    @Field(() => Int, {nullable:true})
    scheduleId?: number;

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

    @Field(() => WorkflowsOnEventTypesUncheckedCreateNestedManyWithoutEventTypeInput, {nullable:true})
    workflows?: WorkflowsOnEventTypesUncheckedCreateNestedManyWithoutEventTypeInput;

    @Field(() => GraphQLJSON, {nullable:true})
    bookingLimits?: any;
}
