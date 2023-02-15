import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowStepUpdateInput } from './workflow-step-update.input';
import { Type } from 'class-transformer';
import { WorkflowStepWhereUniqueInput } from './workflow-step-where-unique.input';

@ArgsType()
export class UpdateOneWorkflowStepArgs {

    @Field(() => WorkflowStepUpdateInput, {nullable:false})
    @Type(() => WorkflowStepUpdateInput)
    data!: WorkflowStepUpdateInput;

    @Field(() => WorkflowStepWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowStepWhereUniqueInput)
    where!: WorkflowStepWhereUniqueInput;
}
