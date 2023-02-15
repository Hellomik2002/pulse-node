import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class DestinationCalendarScalarWhereWithAggregatesInput {

    @Field(() => [DestinationCalendarScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DestinationCalendarScalarWhereWithAggregatesInput>;

    @Field(() => [DestinationCalendarScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DestinationCalendarScalarWhereWithAggregatesInput>;

    @Field(() => [DestinationCalendarScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DestinationCalendarScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    integration?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    externalId?: StringWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    userId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    eventTypeId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    credentialId?: IntNullableWithAggregatesFilter;
}
