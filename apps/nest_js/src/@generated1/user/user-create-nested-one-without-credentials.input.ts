import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCredentialsInput } from './user-create-without-credentials.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCredentialsInput } from './user-create-or-connect-without-credentials.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCredentialsInput {

    @Field(() => UserCreateWithoutCredentialsInput, {nullable:true})
    @Type(() => UserCreateWithoutCredentialsInput)
    create?: UserCreateWithoutCredentialsInput;

    @Field(() => UserCreateOrConnectWithoutCredentialsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCredentialsInput)
    connectOrCreate?: UserCreateOrConnectWithoutCredentialsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
