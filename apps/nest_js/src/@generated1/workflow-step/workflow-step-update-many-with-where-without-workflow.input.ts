import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowStepScalarWhereInput } from './workflow-step-scalar-where.input';
import { Type } from 'class-transformer';
import { WorkflowStepUpdateManyMutationInput } from './workflow-step-update-many-mutation.input';

@InputType()
export class WorkflowStepUpdateManyWithWhereWithoutWorkflowInput {

    @Field(() => WorkflowStepScalarWhereInput, {nullable:false})
    @Type(() => WorkflowStepScalarWhereInput)
    where!: WorkflowStepScalarWhereInput;

    @Field(() => WorkflowStepUpdateManyMutationInput, {nullable:false})
    @Type(() => WorkflowStepUpdateManyMutationInput)
    data!: WorkflowStepUpdateManyMutationInput;
}
