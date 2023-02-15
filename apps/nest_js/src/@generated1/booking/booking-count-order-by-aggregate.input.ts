import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BookingCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

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

    @Field(() => SortOrder, {nullable:true})
    scheduledJobs?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    metadata?: keyof typeof SortOrder;
}
