import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutApiKeysInput } from './user-update-without-api-keys.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutApiKeysInput } from './user-create-without-api-keys.input';

@InputType()
export class UserUpsertWithoutApiKeysInput {

    @Field(() => UserUpdateWithoutApiKeysInput, {nullable:false})
    @Type(() => UserUpdateWithoutApiKeysInput)
    update!: UserUpdateWithoutApiKeysInput;

    @Field(() => UserCreateWithoutApiKeysInput, {nullable:false})
    @Type(() => UserCreateWithoutApiKeysInput)
    create!: UserCreateWithoutApiKeysInput;
}
