import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class AvailabilityScalarWhereInput {

    @Field(() => [AvailabilityScalarWhereInput], {nullable:true})
    AND?: Array<AvailabilityScalarWhereInput>;

    @Field(() => [AvailabilityScalarWhereInput], {nullable:true})
    OR?: Array<AvailabilityScalarWhereInput>;

    @Field(() => [AvailabilityScalarWhereInput], {nullable:true})
    NOT?: Array<AvailabilityScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    eventTypeId?: IntNullableFilter;

    @Field(() => IntNullableListFilter, {nullable:true})
    days?: IntNullableListFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startTime?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    endTime?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date?: DateTimeNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    scheduleId?: IntNullableFilter;
}
