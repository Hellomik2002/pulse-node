import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { EnumAppCategoriesNullableListFilter } from '../prisma/enum-app-categories-nullable-list-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class AppScalarWhereWithAggregatesInput {

    @Field(() => [AppScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AppScalarWhereWithAggregatesInput>;

    @Field(() => [AppScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AppScalarWhereWithAggregatesInput>;

    @Field(() => [AppScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AppScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    dirName?: StringWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    keys?: JsonNullableWithAggregatesFilter;

    @Field(() => EnumAppCategoriesNullableListFilter, {nullable:true})
    categories?: EnumAppCategoriesNullableListFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    enabled?: BoolWithAggregatesFilter;
}
