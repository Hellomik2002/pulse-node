import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class AvailabilityScalarWhereWithAggregatesInput {

    @Field(() => [AvailabilityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AvailabilityScalarWhereWithAggregatesInput>;

    @Field(() => [AvailabilityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AvailabilityScalarWhereWithAggregatesInput>;

    @Field(() => [AvailabilityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AvailabilityScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    userId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    eventTypeId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableListFilter, {nullable:true})
    days?: IntNullableListFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    startTime?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    endTime?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    date?: DateTimeNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    scheduleId?: IntNullableWithAggregatesFilter;
}
