import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ApiKeyWhereUniqueInput } from './api-key-where-unique.input';
import { Type } from 'class-transformer';
import { ApiKeyCreateWithoutUserInput } from './api-key-create-without-user.input';

@InputType()
export class ApiKeyCreateOrConnectWithoutUserInput {

    @Field(() => ApiKeyWhereUniqueInput, {nullable:false})
    @Type(() => ApiKeyWhereUniqueInput)
    where!: ApiKeyWhereUniqueInput;

    @Field(() => ApiKeyCreateWithoutUserInput, {nullable:false})
    @Type(() => ApiKeyCreateWithoutUserInput)
    create!: ApiKeyCreateWithoutUserInput;
}
