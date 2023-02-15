import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ApiKeyWhereUniqueInput } from './api-key-where-unique.input';
import { Type } from 'class-transformer';
import { ApiKeyCreateWithoutAppInput } from './api-key-create-without-app.input';

@InputType()
export class ApiKeyCreateOrConnectWithoutAppInput {

    @Field(() => ApiKeyWhereUniqueInput, {nullable:false})
    @Type(() => ApiKeyWhereUniqueInput)
    where!: ApiKeyWhereUniqueInput;

    @Field(() => ApiKeyCreateWithoutAppInput, {nullable:false})
    @Type(() => ApiKeyCreateWithoutAppInput)
    create!: ApiKeyCreateWithoutAppInput;
}
