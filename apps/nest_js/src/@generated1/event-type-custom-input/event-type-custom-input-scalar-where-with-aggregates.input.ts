import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumEventTypeCustomInputTypeWithAggregatesFilter } from '../prisma/enum-event-type-custom-input-type-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class EventTypeCustomInputScalarWhereWithAggregatesInput {

    @Field(() => [EventTypeCustomInputScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EventTypeCustomInputScalarWhereWithAggregatesInput>;

    @Field(() => [EventTypeCustomInputScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EventTypeCustomInputScalarWhereWithAggregatesInput>;

    @Field(() => [EventTypeCustomInputScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EventTypeCustomInputScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    eventTypeId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    label?: StringWithAggregatesFilter;

    @Field(() => EnumEventTypeCustomInputTypeWithAggregatesFilter, {nullable:true})
    type?: EnumEventTypeCustomInputTypeWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    options?: JsonNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    required?: BoolWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    placeholder?: StringWithAggregatesFilter;
}
