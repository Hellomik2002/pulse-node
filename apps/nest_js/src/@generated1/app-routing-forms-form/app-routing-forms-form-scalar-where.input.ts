import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class App_RoutingForms_FormScalarWhereInput {

    @Field(() => [App_RoutingForms_FormScalarWhereInput], {nullable:true})
    AND?: Array<App_RoutingForms_FormScalarWhereInput>;

    @Field(() => [App_RoutingForms_FormScalarWhereInput], {nullable:true})
    OR?: Array<App_RoutingForms_FormScalarWhereInput>;

    @Field(() => [App_RoutingForms_FormScalarWhereInput], {nullable:true})
    NOT?: Array<App_RoutingForms_FormScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    routes?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    fields?: JsonNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    disabled?: BoolFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    settings?: JsonNullableFilter;
}
