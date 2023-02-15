import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class AttendeeScalarWhereInput {

    @Field(() => [AttendeeScalarWhereInput], {nullable:true})
    AND?: Array<AttendeeScalarWhereInput>;

    @Field(() => [AttendeeScalarWhereInput], {nullable:true})
    OR?: Array<AttendeeScalarWhereInput>;

    @Field(() => [AttendeeScalarWhereInput], {nullable:true})
    NOT?: Array<AttendeeScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    timeZone?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    locale?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    bookingId?: IntNullableFilter;
}
