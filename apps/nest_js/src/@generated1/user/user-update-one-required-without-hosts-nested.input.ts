import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutHostsInput } from './user-create-without-hosts.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutHostsInput } from './user-create-or-connect-without-hosts.input';
import { UserUpsertWithoutHostsInput } from './user-upsert-without-hosts.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutHostsInput } from './user-update-without-hosts.input';

@InputType()
export class UserUpdateOneRequiredWithoutHostsNestedInput {

    @Field(() => UserCreateWithoutHostsInput, {nullable:true})
    @Type(() => UserCreateWithoutHostsInput)
    create?: UserCreateWithoutHostsInput;

    @Field(() => UserCreateOrConnectWithoutHostsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutHostsInput)
    connectOrCreate?: UserCreateOrConnectWithoutHostsInput;

    @Field(() => UserUpsertWithoutHostsInput, {nullable:true})
    @Type(() => UserUpsertWithoutHostsInput)
    upsert?: UserUpsertWithoutHostsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutHostsInput, {nullable:true})
    @Type(() => UserUpdateWithoutHostsInput)
    update?: UserUpdateWithoutHostsInput;
}
