import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutImpersonatedByInput } from './user-create-without-impersonated-by.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutImpersonatedByInput } from './user-create-or-connect-without-impersonated-by.input';
import { UserUpsertWithoutImpersonatedByInput } from './user-upsert-without-impersonated-by.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutImpersonatedByInput } from './user-update-without-impersonated-by.input';

@InputType()
export class UserUpdateOneRequiredWithoutImpersonatedByNestedInput {

    @Field(() => UserCreateWithoutImpersonatedByInput, {nullable:true})
    @Type(() => UserCreateWithoutImpersonatedByInput)
    create?: UserCreateWithoutImpersonatedByInput;

    @Field(() => UserCreateOrConnectWithoutImpersonatedByInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutImpersonatedByInput)
    connectOrCreate?: UserCreateOrConnectWithoutImpersonatedByInput;

    @Field(() => UserUpsertWithoutImpersonatedByInput, {nullable:true})
    @Type(() => UserUpsertWithoutImpersonatedByInput)
    upsert?: UserUpsertWithoutImpersonatedByInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutImpersonatedByInput, {nullable:true})
    @Type(() => UserUpdateWithoutImpersonatedByInput)
    update?: UserUpdateWithoutImpersonatedByInput;
}
