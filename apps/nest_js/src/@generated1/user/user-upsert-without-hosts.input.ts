import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutHostsInput } from './user-update-without-hosts.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutHostsInput } from './user-create-without-hosts.input';

@InputType()
export class UserUpsertWithoutHostsInput {

    @Field(() => UserUpdateWithoutHostsInput, {nullable:false})
    @Type(() => UserUpdateWithoutHostsInput)
    update!: UserUpdateWithoutHostsInput;

    @Field(() => UserCreateWithoutHostsInput, {nullable:false})
    @Type(() => UserCreateWithoutHostsInput)
    create!: UserCreateWithoutHostsInput;
}
