import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class App_RoutingForms_FormResponseScalarWhereInput {

    @Field(() => [App_RoutingForms_FormResponseScalarWhereInput], {nullable:true})
    AND?: Array<App_RoutingForms_FormResponseScalarWhereInput>;

    @Field(() => [App_RoutingForms_FormResponseScalarWhereInput], {nullable:true})
    OR?: Array<App_RoutingForms_FormResponseScalarWhereInput>;

    @Field(() => [App_RoutingForms_FormResponseScalarWhereInput], {nullable:true})
    NOT?: Array<App_RoutingForms_FormResponseScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    formFillerId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    formId?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    response?: JsonFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
