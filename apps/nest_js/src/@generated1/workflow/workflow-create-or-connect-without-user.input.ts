import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowWhereUniqueInput } from './workflow-where-unique.input';
import { Type } from 'class-transformer';
import { WorkflowCreateWithoutUserInput } from './workflow-create-without-user.input';

@InputType()
export class WorkflowCreateOrConnectWithoutUserInput {

    @Field(() => WorkflowWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowWhereUniqueInput)
    where!: WorkflowWhereUniqueInput;

    @Field(() => WorkflowCreateWithoutUserInput, {nullable:false})
    @Type(() => WorkflowCreateWithoutUserInput)
    create!: WorkflowCreateWithoutUserInput;
}
