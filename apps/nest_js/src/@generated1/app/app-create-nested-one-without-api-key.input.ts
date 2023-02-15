import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppCreateWithoutApiKeyInput } from './app-create-without-api-key.input';
import { Type } from 'class-transformer';
import { AppCreateOrConnectWithoutApiKeyInput } from './app-create-or-connect-without-api-key.input';
import { AppWhereUniqueInput } from './app-where-unique.input';

@InputType()
export class AppCreateNestedOneWithoutApiKeyInput {

    @Field(() => AppCreateWithoutApiKeyInput, {nullable:true})
    @Type(() => AppCreateWithoutApiKeyInput)
    create?: AppCreateWithoutApiKeyInput;

    @Field(() => AppCreateOrConnectWithoutApiKeyInput, {nullable:true})
    @Type(() => AppCreateOrConnectWithoutApiKeyInput)
    connectOrCreate?: AppCreateOrConnectWithoutApiKeyInput;

    @Field(() => AppWhereUniqueInput, {nullable:true})
    @Type(() => AppWhereUniqueInput)
    connect?: AppWhereUniqueInput;
}
