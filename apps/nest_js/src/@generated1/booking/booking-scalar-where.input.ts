import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumBookingStatusFilter } from '../prisma/enum-booking-status-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class BookingScalarWhereInput {

    @Field(() => [BookingScalarWhereInput], {nullable:true})
    AND?: Array<BookingScalarWhereInput>;

    @Field(() => [BookingScalarWhereInput], {nullable:true})
    OR?: Array<BookingScalarWhereInput>;

    @Field(() => [BookingScalarWhereInput], {nullable:true})
    NOT?: Array<BookingScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    uid?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    eventTypeId?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    customInputs?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startTime?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    endTime?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    location?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => EnumBookingStatusFilter, {nullable:true})
    status?: EnumBookingStatusFilter;

    @Field(() => BoolFilter, {nullable:true})
    paid?: BoolFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    destinationCalendarId?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    cancellationReason?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    rejectionReason?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    dynamicEventSlugRef?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    dynamicGroupSlugRef?: StringNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    rescheduled?: BoolNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    fromReschedule?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    recurringEventId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    smsReminderNumber?: StringNullableFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    scheduledJobs?: StringNullableListFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;
}
