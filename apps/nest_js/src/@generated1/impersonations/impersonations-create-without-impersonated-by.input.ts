import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutImpersonatedUsersInput } from '../user/user-create-nested-one-without-impersonated-users.input';

@InputType()
export class ImpersonationsCreateWithoutImpersonatedByInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutImpersonatedUsersInput, {nullable:false})
    impersonatedUser!: UserCreateNestedOneWithoutImpersonatedUsersInput;
}
