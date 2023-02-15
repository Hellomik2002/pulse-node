import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowStepWhereUniqueInput } from './workflow-step-where-unique.input';
import { Type } from 'class-transformer';
import { WorkflowStepCreateInput } from './workflow-step-create.input';
import { WorkflowStepUpdateInput } from './workflow-step-update.input';

@ArgsType()
export class UpsertOneWorkflowStepArgs {

    @Field(() => WorkflowStepWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowStepWhereUniqueInput)
    where!: WorkflowStepWhereUniqueInput;

    @Field(() => WorkflowStepCreateInput, {nullable:false})
    @Type(() => WorkflowStepCreateInput)
    create!: WorkflowStepCreateInput;

    @Field(() => WorkflowStepUpdateInput, {nullable:false})
    @Type(() => WorkflowStepUpdateInput)
    update!: WorkflowStepUpdateInput;
}
