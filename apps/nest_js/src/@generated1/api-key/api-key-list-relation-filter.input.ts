import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ApiKeyWhereInput } from './api-key-where.input';

@InputType()
export class ApiKeyListRelationFilter {

    @Field(() => ApiKeyWhereInput, {nullable:true})
    every?: ApiKeyWhereInput;

    @Field(() => ApiKeyWhereInput, {nullable:true})
    some?: ApiKeyWhereInput;

    @Field(() => ApiKeyWhereInput, {nullable:true})
    none?: ApiKeyWhereInput;
}
