import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { HostListRelationFilter } from '../host/host-list-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { TeamRelationFilter } from '../team/team-relation-filter.input';
import { HashedLinkRelationFilter } from '../hashed-link/hashed-link-relation-filter.input';
import { BookingListRelationFilter } from '../booking/booking-list-relation-filter.input';
import { AvailabilityListRelationFilter } from '../availability/availability-list-relation-filter.input';
import { WebhookListRelationFilter } from '../webhook/webhook-list-relation-filter.input';
import { DestinationCalendarRelationFilter } from '../destination-calendar/destination-calendar-relation-filter.input';
import { EventTypeCustomInputListRelationFilter } from '../event-type-custom-input/event-type-custom-input-list-relation-filter.input';
import { EnumPeriodTypeFilter } from '../prisma/enum-period-type-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { EnumSchedulingTypeNullableFilter } from '../prisma/enum-scheduling-type-nullable-filter.input';
import { ScheduleRelationFilter } from '../schedule/schedule-relation-filter.input';
import { WorkflowsOnEventTypesListRelationFilter } from '../workflows-on-event-types/workflows-on-event-types-list-relation-filter.input';

@InputType()
export class EventTypeWhereInput {

    @Field(() => [EventTypeWhereInput], {nullable:true})
    AND?: Array<EventTypeWhereInput>;

    @Field(() => [EventTypeWhereInput], {nullable:true})
    OR?: Array<EventTypeWhereInput>;

    @Field(() => [EventTypeWhereInput], {nullable:true})
    NOT?: Array<EventTypeWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    position?: IntFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    locations?: JsonNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    length?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    hidden?: BoolFilter;

    @Field(() => HostListRelationFilter, {nullable:true})
    hosts?: HostListRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    users?: UserListRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    owner?: UserRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => TeamRelationFilter, {nullable:true})
    team?: TeamRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    teamId?: IntNullableFilter;

    @Field(() => HashedLinkRelationFilter, {nullable:true})
    hashedLink?: HashedLinkRelationFilter;

    @Field(() => BookingListRelationFilter, {nullable:true})
    bookings?: BookingListRelationFilter;

    @Field(() => AvailabilityListRelationFilter, {nullable:true})
    availability?: AvailabilityListRelationFilter;

    @Field(() => WebhookListRelationFilter, {nullable:true})
    webhooks?: WebhookListRelationFilter;

    @Field(() => DestinationCalendarRelationFilter, {nullable:true})
    destinationCalendar?: DestinationCalendarRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    eventName?: StringNullableFilter;

    @Field(() => EventTypeCustomInputListRelationFilter, {nullable:true})
    customInputs?: EventTypeCustomInputListRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    timeZone?: StringNullableFilter;

    @Field(() => EnumPeriodTypeFilter, {nullable:true})
    periodType?: EnumPeriodTypeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    periodStartDate?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    periodEndDate?: DateTimeNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    periodDays?: IntNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    periodCountCalendarDays?: BoolNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    requiresConfirmation?: BoolFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    recurringEvent?: JsonNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    disableGuests?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    hideCalendarNotes?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    minimumBookingNotice?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    beforeEventBuffer?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    afterEventBuffer?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    seatsPerTimeSlot?: IntNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    seatsShowAttendees?: BoolNullableFilter;

    @Field(() => EnumSchedulingTypeNullableFilter, {nullable:true})
    schedulingType?: EnumSchedulingTypeNullableFilter;

    @Field(() => ScheduleRelationFilter, {nullable:true})
    schedule?: ScheduleRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    scheduleId?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    price?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    currency?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    slotInterval?: IntNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    successRedirectUrl?: StringNullableFilter;

    @Field(() => WorkflowsOnEventTypesListRelationFilter, {nullable:true})
    workflows?: WorkflowsOnEventTypesListRelationFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    bookingLimits?: JsonNullableFilter;
}
