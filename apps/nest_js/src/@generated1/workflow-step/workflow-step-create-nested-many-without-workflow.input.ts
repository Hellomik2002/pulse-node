import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowStepCreateWithoutWorkflowInput } from './workflow-step-create-without-workflow.input';
import { Type } from 'class-transformer';
import { WorkflowStepCreateOrConnectWithoutWorkflowInput } from './workflow-step-create-or-connect-without-workflow.input';
import { WorkflowStepCreateManyWorkflowInputEnvelope } from './workflow-step-create-many-workflow-input-envelope.input';
import { WorkflowStepWhereUniqueInput } from './workflow-step-where-unique.input';

@InputType()
export class WorkflowStepCreateNestedManyWithoutWorkflowInput {

    @Field(() => [WorkflowStepCreateWithoutWorkflowInput], {nullable:true})
    @Type(() => WorkflowStepCreateWithoutWorkflowInput)
    create?: Array<WorkflowStepCreateWithoutWorkflowInput>;

    @Field(() => [WorkflowStepCreateOrConnectWithoutWorkflowInput], {nullable:true})
    @Type(() => WorkflowStepCreateOrConnectWithoutWorkflowInput)
    connectOrCreate?: Array<WorkflowStepCreateOrConnectWithoutWorkflowInput>;

    @Field(() => WorkflowStepCreateManyWorkflowInputEnvelope, {nullable:true})
    @Type(() => WorkflowStepCreateManyWorkflowInputEnvelope)
    createMany?: WorkflowStepCreateManyWorkflowInputEnvelope;

    @Field(() => [WorkflowStepWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowStepWhereUniqueInput)
    connect?: Array<WorkflowStepWhereUniqueInput>;
}
