import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class AccountWhereInput {

    @Field(() => [AccountWhereInput], {nullable:true})
    AND?: Array<AccountWhereInput>;

    @Field(() => [AccountWhereInput], {nullable:true})
    OR?: Array<AccountWhereInput>;

    @Field(() => [AccountWhereInput], {nullable:true})
    NOT?: Array<AccountWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    type?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    provider?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    providerAccountId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    refresh_token?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    access_token?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    expires_at?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    token_type?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    scope?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    id_token?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    session_state?: StringNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}
