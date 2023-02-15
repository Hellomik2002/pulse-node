import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutImpersonatedUsersInput } from '../user/user-create-nested-one-without-impersonated-users.input';
import { UserCreateNestedOneWithoutImpersonatedByInput } from '../user/user-create-nested-one-without-impersonated-by.input';

@InputType()
export class ImpersonationsCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutImpersonatedUsersInput, {nullable:false})
    impersonatedUser!: UserCreateNestedOneWithoutImpersonatedUsersInput;

    @Field(() => UserCreateNestedOneWithoutImpersonatedByInput, {nullable:false})
    impersonatedBy!: UserCreateNestedOneWithoutImpersonatedByInput;
}
