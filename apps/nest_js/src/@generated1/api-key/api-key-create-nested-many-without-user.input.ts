import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ApiKeyCreateWithoutUserInput } from './api-key-create-without-user.input';
import { Type } from 'class-transformer';
import { ApiKeyCreateOrConnectWithoutUserInput } from './api-key-create-or-connect-without-user.input';
import { ApiKeyCreateManyUserInputEnvelope } from './api-key-create-many-user-input-envelope.input';
import { ApiKeyWhereUniqueInput } from './api-key-where-unique.input';

@InputType()
export class ApiKeyCreateNestedManyWithoutUserInput {

    @Field(() => [ApiKeyCreateWithoutUserInput], {nullable:true})
    @Type(() => ApiKeyCreateWithoutUserInput)
    create?: Array<ApiKeyCreateWithoutUserInput>;

    @Field(() => [ApiKeyCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ApiKeyCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ApiKeyCreateOrConnectWithoutUserInput>;

    @Field(() => ApiKeyCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ApiKeyCreateManyUserInputEnvelope)
    createMany?: ApiKeyCreateManyUserInputEnvelope;

    @Field(() => [ApiKeyWhereUniqueInput], {nullable:true})
    @Type(() => ApiKeyWhereUniqueInput)
    connect?: Array<ApiKeyWhereUniqueInput>;
}
