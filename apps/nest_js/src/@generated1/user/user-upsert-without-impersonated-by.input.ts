import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutImpersonatedByInput } from './user-update-without-impersonated-by.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutImpersonatedByInput } from './user-create-without-impersonated-by.input';

@InputType()
export class UserUpsertWithoutImpersonatedByInput {

    @Field(() => UserUpdateWithoutImpersonatedByInput, {nullable:false})
    @Type(() => UserUpdateWithoutImpersonatedByInput)
    update!: UserUpdateWithoutImpersonatedByInput;

    @Field(() => UserCreateWithoutImpersonatedByInput, {nullable:false})
    @Type(() => UserCreateWithoutImpersonatedByInput)
    create!: UserCreateWithoutImpersonatedByInput;
}
