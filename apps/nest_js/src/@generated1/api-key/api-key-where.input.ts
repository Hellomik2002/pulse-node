import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { AppRelationFilter } from '../app/app-relation-filter.input';

@InputType()
export class ApiKeyWhereInput {

    @Field(() => [ApiKeyWhereInput], {nullable:true})
    AND?: Array<ApiKeyWhereInput>;

    @Field(() => [ApiKeyWhereInput], {nullable:true})
    OR?: Array<ApiKeyWhereInput>;

    @Field(() => [ApiKeyWhereInput], {nullable:true})
    NOT?: Array<ApiKeyWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    note?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    expiresAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    lastUsedAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    hashedKey?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => AppRelationFilter, {nullable:true})
    app?: AppRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    appId?: StringNullableFilter;
}
