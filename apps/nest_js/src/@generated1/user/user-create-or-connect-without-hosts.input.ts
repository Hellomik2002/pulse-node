import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutHostsInput } from './user-create-without-hosts.input';

@InputType()
export class UserCreateOrConnectWithoutHostsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutHostsInput, {nullable:false})
    @Type(() => UserCreateWithoutHostsInput)
    create!: UserCreateWithoutHostsInput;
}
