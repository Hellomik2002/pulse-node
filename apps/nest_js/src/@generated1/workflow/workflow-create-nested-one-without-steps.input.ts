import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowCreateWithoutStepsInput } from './workflow-create-without-steps.input';
import { Type } from 'class-transformer';
import { WorkflowCreateOrConnectWithoutStepsInput } from './workflow-create-or-connect-without-steps.input';
import { WorkflowWhereUniqueInput } from './workflow-where-unique.input';

@InputType()
export class WorkflowCreateNestedOneWithoutStepsInput {

    @Field(() => WorkflowCreateWithoutStepsInput, {nullable:true})
    @Type(() => WorkflowCreateWithoutStepsInput)
    create?: WorkflowCreateWithoutStepsInput;

    @Field(() => WorkflowCreateOrConnectWithoutStepsInput, {nullable:true})
    @Type(() => WorkflowCreateOrConnectWithoutStepsInput)
    connectOrCreate?: WorkflowCreateOrConnectWithoutStepsInput;

    @Field(() => WorkflowWhereUniqueInput, {nullable:true})
    @Type(() => WorkflowWhereUniqueInput)
    connect?: WorkflowWhereUniqueInput;
}
