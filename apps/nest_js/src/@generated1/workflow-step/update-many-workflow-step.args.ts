import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowStepUpdateManyMutationInput } from './workflow-step-update-many-mutation.input';
import { Type } from 'class-transformer';
import { WorkflowStepWhereInput } from './workflow-step-where.input';

@ArgsType()
export class UpdateManyWorkflowStepArgs {

    @Field(() => WorkflowStepUpdateManyMutationInput, {nullable:false})
    @Type(() => WorkflowStepUpdateManyMutationInput)
    data!: WorkflowStepUpdateManyMutationInput;

    @Field(() => WorkflowStepWhereInput, {nullable:true})
    @Type(() => WorkflowStepWhereInput)
    where?: WorkflowStepWhereInput;
}
