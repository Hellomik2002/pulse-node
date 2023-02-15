import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class EventTypeCountOrderByAggregateInput {

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

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    teamId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventName?: keyof typeof SortOrder;

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

    @Field(() => SortOrder, {nullable:true})
    bookingLimits?: keyof typeof SortOrder;
}
