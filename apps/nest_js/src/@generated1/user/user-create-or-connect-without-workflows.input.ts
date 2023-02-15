import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutWorkflowsInput } from './user-create-without-workflows.input';

@InputType()
export class UserCreateOrConnectWithoutWorkflowsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutWorkflowsInput, {nullable:false})
    @Type(() => UserCreateWithoutWorkflowsInput)
    create!: UserCreateWithoutWorkflowsInput;
}
