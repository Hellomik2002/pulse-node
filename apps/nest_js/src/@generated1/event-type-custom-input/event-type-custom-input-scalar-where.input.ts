import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumEventTypeCustomInputTypeFilter } from '../prisma/enum-event-type-custom-input-type-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class EventTypeCustomInputScalarWhereInput {

    @Field(() => [EventTypeCustomInputScalarWhereInput], {nullable:true})
    AND?: Array<EventTypeCustomInputScalarWhereInput>;

    @Field(() => [EventTypeCustomInputScalarWhereInput], {nullable:true})
    OR?: Array<EventTypeCustomInputScalarWhereInput>;

    @Field(() => [EventTypeCustomInputScalarWhereInput], {nullable:true})
    NOT?: Array<EventTypeCustomInputScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    eventTypeId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    label?: StringFilter;

    @Field(() => EnumEventTypeCustomInputTypeFilter, {nullable:true})
    type?: EnumEventTypeCustomInputTypeFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    options?: JsonNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    required?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    placeholder?: StringFilter;
}
