import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutApiKeysInput } from './user-create-without-api-keys.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutApiKeysInput } from './user-create-or-connect-without-api-keys.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutApiKeysInput {

    @Field(() => UserCreateWithoutApiKeysInput, {nullable:true})
    @Type(() => UserCreateWithoutApiKeysInput)
    create?: UserCreateWithoutApiKeysInput;

    @Field(() => UserCreateOrConnectWithoutApiKeysInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutApiKeysInput)
    connectOrCreate?: UserCreateOrConnectWithoutApiKeysInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
