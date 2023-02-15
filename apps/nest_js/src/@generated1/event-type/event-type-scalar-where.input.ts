import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumPeriodTypeFilter } from '../prisma/enum-period-type-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { EnumSchedulingTypeNullableFilter } from '../prisma/enum-scheduling-type-nullable-filter.input';

@InputType()
export class EventTypeScalarWhereInput {

    @Field(() => [EventTypeScalarWhereInput], {nullable:true})
    AND?: Array<EventTypeScalarWhereInput>;

    @Field(() => [EventTypeScalarWhereInput], {nullable:true})
    OR?: Array<EventTypeScalarWhereInput>;

    @Field(() => [EventTypeScalarWhereInput], {nullable:true})
    NOT?: Array<EventTypeScalarWhereInput>;

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

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    teamId?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    eventName?: StringNullableFilter;

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

    @Field(() => JsonNullableFilter, {nullable:true})
    bookingLimits?: JsonNullableFilter;
}
