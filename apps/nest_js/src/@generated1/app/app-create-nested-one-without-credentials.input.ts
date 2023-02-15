import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppCreateWithoutCredentialsInput } from './app-create-without-credentials.input';
import { Type } from 'class-transformer';
import { AppCreateOrConnectWithoutCredentialsInput } from './app-create-or-connect-without-credentials.input';
import { AppWhereUniqueInput } from './app-where-unique.input';

@InputType()
export class AppCreateNestedOneWithoutCredentialsInput {

    @Field(() => AppCreateWithoutCredentialsInput, {nullable:true})
    @Type(() => AppCreateWithoutCredentialsInput)
    create?: AppCreateWithoutCredentialsInput;

    @Field(() => AppCreateOrConnectWithoutCredentialsInput, {nullable:true})
    @Type(() => AppCreateOrConnectWithoutCredentialsInput)
    connectOrCreate?: AppCreateOrConnectWithoutCredentialsInput;

    @Field(() => AppWhereUniqueInput, {nullable:true})
    @Type(() => AppWhereUniqueInput)
    connect?: AppWhereUniqueInput;
}
