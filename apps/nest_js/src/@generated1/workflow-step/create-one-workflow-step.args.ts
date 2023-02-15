import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowStepCreateInput } from './workflow-step-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneWorkflowStepArgs {

    @Field(() => WorkflowStepCreateInput, {nullable:false})
    @Type(() => WorkflowStepCreateInput)
    data!: WorkflowStepCreateInput;
}
