import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutWorkflowsInput } from './user-create-without-workflows.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutWorkflowsInput } from './user-create-or-connect-without-workflows.input';
import { UserUpsertWithoutWorkflowsInput } from './user-upsert-without-workflows.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutWorkflowsInput } from './user-update-without-workflows.input';

@InputType()
export class UserUpdateOneRequiredWithoutWorkflowsNestedInput {

    @Field(() => UserCreateWithoutWorkflowsInput, {nullable:true})
    @Type(() => UserCreateWithoutWorkflowsInput)
    create?: UserCreateWithoutWorkflowsInput;

    @Field(() => UserCreateOrConnectWithoutWorkflowsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutWorkflowsInput)
    connectOrCreate?: UserCreateOrConnectWithoutWorkflowsInput;

    @Field(() => UserUpsertWithoutWorkflowsInput, {nullable:true})
    @Type(() => UserUpsertWithoutWorkflowsInput)
    upsert?: UserUpsertWithoutWorkflowsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutWorkflowsInput, {nullable:true})
    @Type(() => UserUpdateWithoutWorkflowsInput)
    update?: UserUpdateWithoutWorkflowsInput;
}
