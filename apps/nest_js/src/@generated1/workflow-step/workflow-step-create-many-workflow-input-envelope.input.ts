import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowStepCreateManyWorkflowInput } from './workflow-step-create-many-workflow.input';
import { Type } from 'class-transformer';

@InputType()
export class WorkflowStepCreateManyWorkflowInputEnvelope {

    @Field(() => [WorkflowStepCreateManyWorkflowInput], {nullable:false})
    @Type(() => WorkflowStepCreateManyWorkflowInput)
    data!: Array<WorkflowStepCreateManyWorkflowInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
