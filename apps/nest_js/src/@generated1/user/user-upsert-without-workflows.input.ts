import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutWorkflowsInput } from './user-update-without-workflows.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutWorkflowsInput } from './user-create-without-workflows.input';

@InputType()
export class UserUpsertWithoutWorkflowsInput {

    @Field(() => UserUpdateWithoutWorkflowsInput, {nullable:false})
    @Type(() => UserUpdateWithoutWorkflowsInput)
    update!: UserUpdateWithoutWorkflowsInput;

    @Field(() => UserCreateWithoutWorkflowsInput, {nullable:false})
    @Type(() => UserCreateWithoutWorkflowsInput)
    create!: UserCreateWithoutWorkflowsInput;
}
