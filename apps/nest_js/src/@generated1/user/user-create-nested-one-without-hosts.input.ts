import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutHostsInput } from './user-create-without-hosts.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutHostsInput } from './user-create-or-connect-without-hosts.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutHostsInput {

    @Field(() => UserCreateWithoutHostsInput, {nullable:true})
    @Type(() => UserCreateWithoutHostsInput)
    create?: UserCreateWithoutHostsInput;

    @Field(() => UserCreateOrConnectWithoutHostsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutHostsInput)
    connectOrCreate?: UserCreateOrConnectWithoutHostsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
