import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BookingCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    uid!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    eventTypeId!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    customInputs!: number;

    @Field(() => Int, {nullable:false})
    startTime!: number;

    @Field(() => Int, {nullable:false})
    endTime!: number;

    @Field(() => Int, {nullable:false})
    location!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    paid!: number;

    @Field(() => Int, {nullable:false})
    destinationCalendarId!: number;

    @Field(() => Int, {nullable:false})
    cancellationReason!: number;

    @Field(() => Int, {nullable:false})
    rejectionReason!: number;

    @Field(() => Int, {nullable:false})
    dynamicEventSlugRef!: number;

    @Field(() => Int, {nullable:false})
    dynamicGroupSlugRef!: number;

    @Field(() => Int, {nullable:false})
    rescheduled!: number;

    @Field(() => Int, {nullable:false})
    fromReschedule!: number;

    @Field(() => Int, {nullable:false})
    recurringEventId!: number;

    @Field(() => Int, {nullable:false})
    smsReminderNumber!: number;

    @Field(() => Int, {nullable:false})
    scheduledJobs!: number;

    @Field(() => Int, {nullable:false})
    metadata!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
