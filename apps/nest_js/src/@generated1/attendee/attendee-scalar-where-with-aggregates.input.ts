import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class AttendeeScalarWhereWithAggregatesInput {

    @Field(() => [AttendeeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AttendeeScalarWhereWithAggregatesInput>;

    @Field(() => [AttendeeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AttendeeScalarWhereWithAggregatesInput>;

    @Field(() => [AttendeeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AttendeeScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    timeZone?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    locale?: StringNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    bookingId?: IntNullableWithAggregatesFilter;
}
