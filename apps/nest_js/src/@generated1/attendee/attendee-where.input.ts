import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BookingRelationFilter } from '../booking/booking-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class AttendeeWhereInput {

    @Field(() => [AttendeeWhereInput], {nullable:true})
    AND?: Array<AttendeeWhereInput>;

    @Field(() => [AttendeeWhereInput], {nullable:true})
    OR?: Array<AttendeeWhereInput>;

    @Field(() => [AttendeeWhereInput], {nullable:true})
    NOT?: Array<AttendeeWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    timeZone?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    pulseUserId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    locale?: StringNullableFilter;

    @Field(() => BookingRelationFilter, {nullable:true})
    booking?: BookingRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    bookingId?: IntNullableFilter;
}
