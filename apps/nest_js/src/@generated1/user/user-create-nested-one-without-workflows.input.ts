import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutWorkflowsInput } from './user-create-without-workflows.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutWorkflowsInput } from './user-create-or-connect-without-workflows.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutWorkflowsInput {

    @Field(() => UserCreateWithoutWorkflowsInput, {nullable:true})
    @Type(() => UserCreateWithoutWorkflowsInput)
    create?: UserCreateWithoutWorkflowsInput;

    @Field(() => UserCreateOrConnectWithoutWorkflowsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutWorkflowsInput)
    connectOrCreate?: UserCreateOrConnectWithoutWorkflowsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
