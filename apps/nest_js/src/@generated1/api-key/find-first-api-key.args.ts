import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ApiKeyWhereInput } from './api-key-where.input';
import { Type } from 'class-transformer';
import { ApiKeyOrderByWithRelationInput } from './api-key-order-by-with-relation.input';
import { ApiKeyWhereUniqueInput } from './api-key-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ApiKeyScalarFieldEnum } from './api-key-scalar-field.enum';

@ArgsType()
export class FindFirstApiKeyArgs {

    @Field(() => ApiKeyWhereInput, {nullable:true})
    @Type(() => ApiKeyWhereInput)
    where?: ApiKeyWhereInput;

    @Field(() => [ApiKeyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ApiKeyOrderByWithRelationInput>;

    @Field(() => ApiKeyWhereUniqueInput, {nullable:true})
    cursor?: ApiKeyWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ApiKeyScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ApiKeyScalarFieldEnum>;
}
