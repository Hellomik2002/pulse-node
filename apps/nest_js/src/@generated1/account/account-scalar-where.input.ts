import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class AccountScalarWhereInput {

    @Field(() => [AccountScalarWhereInput], {nullable:true})
    AND?: Array<AccountScalarWhereInput>;

    @Field(() => [AccountScalarWhereInput], {nullable:true})
    OR?: Array<AccountScalarWhereInput>;

    @Field(() => [AccountScalarWhereInput], {nullable:true})
    NOT?: Array<AccountScalarWhereInput>;

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
}
