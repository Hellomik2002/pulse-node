import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BookingRelationFilter } from '../booking/booking-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';

@InputType()
export class BookingReferenceWhereInput {

    @Field(() => [BookingReferenceWhereInput], {nullable:true})
    AND?: Array<BookingReferenceWhereInput>;

    @Field(() => [BookingReferenceWhereInput], {nullable:true})
    OR?: Array<BookingReferenceWhereInput>;

    @Field(() => [BookingReferenceWhereInput], {nullable:true})
    NOT?: Array<BookingReferenceWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    type?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    uid?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    meetingId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    meetingPassword?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    meetingUrl?: StringNullableFilter;

    @Field(() => BookingRelationFilter, {nullable:true})
    booking?: BookingRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    bookingId?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    externalCalendarId?: StringNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    deleted?: BoolNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    credentialId?: IntNullableFilter;
}
