import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { App_RoutingForms_FormResponseListRelationFilter } from '../app-routing-forms-form-response/app-routing-forms-form-response-list-relation-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class App_RoutingForms_FormWhereInput {

    @Field(() => [App_RoutingForms_FormWhereInput], {nullable:true})
    AND?: Array<App_RoutingForms_FormWhereInput>;

    @Field(() => [App_RoutingForms_FormWhereInput], {nullable:true})
    OR?: Array<App_RoutingForms_FormWhereInput>;

    @Field(() => [App_RoutingForms_FormWhereInput], {nullable:true})
    NOT?: Array<App_RoutingForms_FormWhereInput>;

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

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => App_RoutingForms_FormResponseListRelationFilter, {nullable:true})
    responses?: App_RoutingForms_FormResponseListRelationFilter;

    @Field(() => BoolFilter, {nullable:true})
    disabled?: BoolFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    settings?: JsonNullableFilter;
}
