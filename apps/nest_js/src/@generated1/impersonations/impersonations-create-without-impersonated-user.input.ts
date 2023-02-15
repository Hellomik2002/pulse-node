import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutImpersonatedByInput } from '../user/user-create-nested-one-without-impersonated-by.input';

@InputType()
export class ImpersonationsCreateWithoutImpersonatedUserInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutImpersonatedByInput, {nullable:false})
    impersonatedBy!: UserCreateNestedOneWithoutImpersonatedByInput;
}
