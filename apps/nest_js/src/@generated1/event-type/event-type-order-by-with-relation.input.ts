import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HostOrderByRelationAggregateInput } from '../host/host-order-by-relation-aggregate.input';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { TeamOrderByWithRelationInput } from '../team/team-order-by-with-relation.input';
import { HashedLinkOrderByWithRelationInput } from '../hashed-link/hashed-link-order-by-with-relation.input';
import { BookingOrderByRelationAggregateInput } from '../booking/booking-order-by-relation-aggregate.input';
import { AvailabilityOrderByRelationAggregateInput } from '../availability/availability-order-by-relation-aggregate.input';
import { WebhookOrderByRelationAggregateInput } from '../webhook/webhook-order-by-relation-aggregate.input';
import { DestinationCalendarOrderByWithRelationInput } from '../destination-calendar/destination-calendar-order-by-with-relation.input';
import { EventTypeCustomInputOrderByRelationAggregateInput } from '../event-type-custom-input/event-type-custom-input-order-by-relation-aggregate.input';
import { ScheduleOrderByWithRelationInput } from '../schedule/schedule-order-by-with-relation.input';
import { WorkflowsOnEventTypesOrderByRelationAggregateInput } from '../workflows-on-event-types/workflows-on-event-types-order-by-relation-aggregate.input';

@InputType()
export class EventTypeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    position?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locations?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    length?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hidden?: keyof typeof SortOrder;

    @Field(() => HostOrderByRelationAggregateInput, {nullable:true})
    hosts?: HostOrderByRelationAggregateInput;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    users?: UserOrderByRelationAggregateInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    owner?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => TeamOrderByWithRelationInput, {nullable:true})
    team?: TeamOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    teamId?: keyof typeof SortOrder;

    @Field(() => HashedLinkOrderByWithRelationInput, {nullable:true})
    hashedLink?: HashedLinkOrderByWithRelationInput;

    @Field(() => BookingOrderByRelationAggregateInput, {nullable:true})
    bookings?: BookingOrderByRelationAggregateInput;

    @Field(() => AvailabilityOrderByRelationAggregateInput, {nullable:true})
    availability?: AvailabilityOrderByRelationAggregateInput;

    @Field(() => WebhookOrderByRelationAggregateInput, {nullable:true})
    webhooks?: WebhookOrderByRelationAggregateInput;

    @Field(() => DestinationCalendarOrderByWithRelationInput, {nullable:true})
    destinationCalendar?: DestinationCalendarOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    eventName?: keyof typeof SortOrder;

    @Field(() => EventTypeCustomInputOrderByRelationAggregateInput, {nullable:true})
    customInputs?: EventTypeCustomInputOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    timeZone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    periodType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    periodStartDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    periodEndDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    periodDays?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    periodCountCalendarDays?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    requiresConfirmation?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    recurringEvent?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    disableGuests?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hideCalendarNotes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    minimumBookingNotice?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    beforeEventBuffer?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    afterEventBuffer?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    seatsPerTimeSlot?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    seatsShowAttendees?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    schedulingType?: keyof typeof SortOrder;

    @Field(() => ScheduleOrderByWithRelationInput, {nullable:true})
    schedule?: ScheduleOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    scheduleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currency?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slotInterval?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    metadata?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    successRedirectUrl?: keyof typeof SortOrder;

    @Field(() => WorkflowsOnEventTypesOrderByRelationAggregateInput, {nullable:true})
    workflows?: WorkflowsOnEventTypesOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    bookingLimits?: keyof typeof SortOrder;
}
