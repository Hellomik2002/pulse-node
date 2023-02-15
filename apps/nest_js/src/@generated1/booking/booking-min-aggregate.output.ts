import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BookingStatus } from '../prisma/booking-status.enum';

@ObjectType()
export class BookingMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    uid?: string;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    eventTypeId?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    startTime?: Date | string;

    @Field(() => Date, {nullable:true})
    endTime?: Date | string;

    @Field(() => String, {nullable:true})
    location?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => BookingStatus, {nullable:true})
    status?: keyof typeof BookingStatus;

    @Field(() => Boolean, {nullable:true})
    paid?: boolean;

    @Field(() => Int, {nullable:true})
    destinationCalendarId?: number;

    @Field(() => String, {nullable:true})
    cancellationReason?: string;

    @Field(() => String, {nullable:true})
    rejectionReason?: string;

    @Field(() => String, {nullable:true})
    dynamicEventSlugRef?: string;

    @Field(() => String, {nullable:true})
    dynamicGroupSlugRef?: string;

    @Field(() => Boolean, {nullable:true})
    rescheduled?: boolean;

    @Field(() => String, {nullable:true})
    fromReschedule?: string;

    @Field(() => String, {nullable:true})
    recurringEventId?: string;

    @Field(() => String, {nullable:true})
    smsReminderNumber?: string;
}
