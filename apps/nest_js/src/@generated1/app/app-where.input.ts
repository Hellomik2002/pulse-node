import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { EnumAppCategoriesNullableListFilter } from '../prisma/enum-app-categories-nullable-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CredentialListRelationFilter } from '../credential/credential-list-relation-filter.input';
import { WebhookListRelationFilter } from '../webhook/webhook-list-relation-filter.input';
import { ApiKeyListRelationFilter } from '../api-key/api-key-list-relation-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class AppWhereInput {

    @Field(() => [AppWhereInput], {nullable:true})
    AND?: Array<AppWhereInput>;

    @Field(() => [AppWhereInput], {nullable:true})
    OR?: Array<AppWhereInput>;

    @Field(() => [AppWhereInput], {nullable:true})
    NOT?: Array<AppWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    dirName?: StringFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    keys?: JsonNullableFilter;

    @Field(() => EnumAppCategoriesNullableListFilter, {nullable:true})
    categories?: EnumAppCategoriesNullableListFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => CredentialListRelationFilter, {nullable:true})
    credentials?: CredentialListRelationFilter;

    @Field(() => WebhookListRelationFilter, {nullable:true})
    Webhook?: WebhookListRelationFilter;

    @Field(() => ApiKeyListRelationFilter, {nullable:true})
    ApiKey?: ApiKeyListRelationFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;
}
