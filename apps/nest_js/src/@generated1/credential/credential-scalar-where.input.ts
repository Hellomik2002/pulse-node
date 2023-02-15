import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';

@InputType()
export class CredentialScalarWhereInput {

    @Field(() => [CredentialScalarWhereInput], {nullable:true})
    AND?: Array<CredentialScalarWhereInput>;

    @Field(() => [CredentialScalarWhereInput], {nullable:true})
    OR?: Array<CredentialScalarWhereInput>;

    @Field(() => [CredentialScalarWhereInput], {nullable:true})
    NOT?: Array<CredentialScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    type?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    key?: JsonFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    appId?: StringNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    invalid?: BoolNullableFilter;
}
