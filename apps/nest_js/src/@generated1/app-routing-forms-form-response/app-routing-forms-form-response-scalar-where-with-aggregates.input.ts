import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class App_RoutingForms_FormResponseScalarWhereWithAggregatesInput {

    @Field(() => [App_RoutingForms_FormResponseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<App_RoutingForms_FormResponseScalarWhereWithAggregatesInput>;

    @Field(() => [App_RoutingForms_FormResponseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<App_RoutingForms_FormResponseScalarWhereWithAggregatesInput>;

    @Field(() => [App_RoutingForms_FormResponseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<App_RoutingForms_FormResponseScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    formFillerId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    formId?: StringWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    response?: JsonWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
