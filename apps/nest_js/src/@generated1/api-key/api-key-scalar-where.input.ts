import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class ApiKeyScalarWhereInput {

    @Field(() => [ApiKeyScalarWhereInput], {nullable:true})
    AND?: Array<ApiKeyScalarWhereInput>;

    @Field(() => [ApiKeyScalarWhereInput], {nullable:true})
    OR?: Array<ApiKeyScalarWhereInput>;

    @Field(() => [ApiKeyScalarWhereInput], {nullable:true})
    NOT?: Array<ApiKeyScalarWhereInput>;

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

    @Field(() => StringNullableFilter, {nullable:true})
    appId?: StringNullableFilter;
}
