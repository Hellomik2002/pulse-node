import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { App_RoutingForms_FormRelationFilter } from '../app-routing-forms-form/app-routing-forms-form-relation-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class App_RoutingForms_FormResponseWhereInput {

    @Field(() => [App_RoutingForms_FormResponseWhereInput], {nullable:true})
    AND?: Array<App_RoutingForms_FormResponseWhereInput>;

    @Field(() => [App_RoutingForms_FormResponseWhereInput], {nullable:true})
    OR?: Array<App_RoutingForms_FormResponseWhereInput>;

    @Field(() => [App_RoutingForms_FormResponseWhereInput], {nullable:true})
    NOT?: Array<App_RoutingForms_FormResponseWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    formFillerId?: StringFilter;

    @Field(() => App_RoutingForms_FormRelationFilter, {nullable:true})
    form?: App_RoutingForms_FormRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    formId?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    response?: JsonFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
