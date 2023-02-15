import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { PeriodType } from '../prisma/period-type.enum';
import { SchedulingType } from '../prisma/scheduling-type.enum';

@InputType()
export class EventTypeCreateManyOwnerInput {

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

    @Field(() => Int, {nullable:true})
    teamId?: number;

    @Field(() => String, {nullable:true})
    eventName?: string;

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

    @Field(() => GraphQLJSON, {nullable:true})
    bookingLimits?: any;
}
