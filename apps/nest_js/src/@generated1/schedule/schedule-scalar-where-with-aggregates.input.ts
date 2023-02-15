import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class ScheduleScalarWhereWithAggregatesInput {

    @Field(() => [ScheduleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ScheduleScalarWhereWithAggregatesInput>;

    @Field(() => [ScheduleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ScheduleScalarWhereWithAggregatesInput>;

    @Field(() => [ScheduleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ScheduleScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    timeZone?: StringNullableWithAggregatesFilter;
}
