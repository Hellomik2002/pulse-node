import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutImpersonatedByInput } from './user-create-without-impersonated-by.input';

@InputType()
export class UserCreateOrConnectWithoutImpersonatedByInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutImpersonatedByInput, {nullable:false})
    @Type(() => UserCreateWithoutImpersonatedByInput)
    create!: UserCreateWithoutImpersonatedByInput;
}
