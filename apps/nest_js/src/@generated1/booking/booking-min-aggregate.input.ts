import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BookingMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    uid?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    eventTypeId?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    startTime?: true;

    @Field(() => Boolean, {nullable:true})
    endTime?: true;

    @Field(() => Boolean, {nullable:true})
    location?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    paid?: true;

    @Field(() => Boolean, {nullable:true})
    destinationCalendarId?: true;

    @Field(() => Boolean, {nullable:true})
    cancellationReason?: true;

    @Field(() => Boolean, {nullable:true})
    rejectionReason?: true;

    @Field(() => Boolean, {nullable:true})
    dynamicEventSlugRef?: true;

    @Field(() => Boolean, {nullable:true})
    dynamicGroupSlugRef?: true;

    @Field(() => Boolean, {nullable:true})
    rescheduled?: true;

    @Field(() => Boolean, {nullable:true})
    fromReschedule?: true;

    @Field(() => Boolean, {nullable:true})
    recurringEventId?: true;

    @Field(() => Boolean, {nullable:true})
    smsReminderNumber?: true;
}
