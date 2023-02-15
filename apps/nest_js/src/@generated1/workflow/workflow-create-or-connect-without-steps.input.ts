import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowWhereUniqueInput } from './workflow-where-unique.input';
import { Type } from 'class-transformer';
import { WorkflowCreateWithoutStepsInput } from './workflow-create-without-steps.input';

@InputType()
export class WorkflowCreateOrConnectWithoutStepsInput {

    @Field(() => WorkflowWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowWhereUniqueInput)
    where!: WorkflowWhereUniqueInput;

    @Field(() => WorkflowCreateWithoutStepsInput, {nullable:false})
    @Type(() => WorkflowCreateWithoutStepsInput)
    create!: WorkflowCreateWithoutStepsInput;
}
