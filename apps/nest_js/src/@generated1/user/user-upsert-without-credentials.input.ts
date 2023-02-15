import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCredentialsInput } from './user-update-without-credentials.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCredentialsInput } from './user-create-without-credentials.input';

@InputType()
export class UserUpsertWithoutCredentialsInput {

    @Field(() => UserUpdateWithoutCredentialsInput, {nullable:false})
    @Type(() => UserUpdateWithoutCredentialsInput)
    update!: UserUpdateWithoutCredentialsInput;

    @Field(() => UserCreateWithoutCredentialsInput, {nullable:false})
    @Type(() => UserCreateWithoutCredentialsInput)
    create!: UserCreateWithoutCredentialsInput;
}
