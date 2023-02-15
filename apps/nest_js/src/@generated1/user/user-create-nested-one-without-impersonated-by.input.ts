import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutImpersonatedByInput } from './user-create-without-impersonated-by.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutImpersonatedByInput } from './user-create-or-connect-without-impersonated-by.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutImpersonatedByInput {

    @Field(() => UserCreateWithoutImpersonatedByInput, {nullable:true})
    @Type(() => UserCreateWithoutImpersonatedByInput)
    create?: UserCreateWithoutImpersonatedByInput;

    @Field(() => UserCreateOrConnectWithoutImpersonatedByInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutImpersonatedByInput)
    connectOrCreate?: UserCreateOrConnectWithoutImpersonatedByInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
