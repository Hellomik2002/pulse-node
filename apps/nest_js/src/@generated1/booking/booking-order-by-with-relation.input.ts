import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { BookingReferenceOrderByRelationAggregateInput } from '../booking-reference/booking-reference-order-by-relation-aggregate.input';
import { EventTypeOrderByWithRelationInput } from '../event-type/event-type-order-by-with-relation.input';
import { AttendeeOrderByRelationAggregateInput } from '../attendee/attendee-order-by-relation-aggregate.input';
import { PaymentOrderByRelationAggregateInput } from '../payment/payment-order-by-relation-aggregate.input';
import { DestinationCalendarOrderByWithRelationInput } from '../destination-calendar/destination-calendar-order-by-with-relation.input';
import { WorkflowReminderOrderByRelationAggregateInput } from '../workflow-reminder/workflow-reminder-order-by-relation-aggregate.input';

@InputType()
export class BookingOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    uid?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => BookingReferenceOrderByRelationAggregateInput, {nullable:true})
    references?: BookingReferenceOrderByRelationAggregateInput;

    @Field(() => EventTypeOrderByWithRelationInput, {nullable:true})
    eventType?: EventTypeOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    eventTypeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customInputs?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endTime?: keyof typeof SortOrder;

    @Field(() => AttendeeOrderByRelationAggregateInput, {nullable:true})
    attendees?: AttendeeOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    location?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    paid?: keyof typeof SortOrder;

    @Field(() => PaymentOrderByRelationAggregateInput, {nullable:true})
    payment?: PaymentOrderByRelationAggregateInput;

    @Field(() => DestinationCalendarOrderByWithRelationInput, {nullable:true})
    destinationCalendar?: DestinationCalendarOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    destinationCalendarId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cancellationReason?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rejectionReason?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dynamicEventSlugRef?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dynamicGroupSlugRef?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rescheduled?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fromReschedule?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    recurringEventId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    smsReminderNumber?: keyof typeof SortOrder;

    @Field(() => WorkflowReminderOrderByRelationAggregateInput, {nullable:true})
    workflowReminders?: WorkflowReminderOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    scheduledJobs?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    metadata?: keyof typeof SortOrder;
}
