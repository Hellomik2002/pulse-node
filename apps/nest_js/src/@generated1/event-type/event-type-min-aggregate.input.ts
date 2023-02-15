import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EventTypeMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    slug?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    position?: true;

    @Field(() => Boolean, {nullable:true})
    length?: true;

    @Field(() => Boolean, {nullable:true})
    hidden?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    teamId?: true;

    @Field(() => Boolean, {nullable:true})
    eventName?: true;

    @Field(() => Boolean, {nullable:true})
    timeZone?: true;

    @Field(() => Boolean, {nullable:true})
    periodType?: true;

    @Field(() => Boolean, {nullable:true})
    periodStartDate?: true;

    @Field(() => Boolean, {nullable:true})
    periodEndDate?: true;

    @Field(() => Boolean, {nullable:true})
    periodDays?: true;

    @Field(() => Boolean, {nullable:true})
    periodCountCalendarDays?: true;

    @Field(() => Boolean, {nullable:true})
    requiresConfirmation?: true;

    @Field(() => Boolean, {nullable:true})
    disableGuests?: true;

    @Field(() => Boolean, {nullable:true})
    hideCalendarNotes?: true;

    @Field(() => Boolean, {nullable:true})
    minimumBookingNotice?: true;

    @Field(() => Boolean, {nullable:true})
    beforeEventBuffer?: true;

    @Field(() => Boolean, {nullable:true})
    afterEventBuffer?: true;

    @Field(() => Boolean, {nullable:true})
    seatsPerTimeSlot?: true;

    @Field(() => Boolean, {nullable:true})
    seatsShowAttendees?: true;

    @Field(() => Boolean, {nullable:true})
    schedulingType?: true;

    @Field(() => Boolean, {nullable:true})
    scheduleId?: true;

    @Field(() => Boolean, {nullable:true})
    price?: true;

    @Field(() => Boolean, {nullable:true})
    currency?: true;

    @Field(() => Boolean, {nullable:true})
    slotInterval?: true;

    @Field(() => Boolean, {nullable:true})
    successRedirectUrl?: true;
}
