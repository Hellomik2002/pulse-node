import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowStepWhereUniqueInput } from './workflow-step-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueWorkflowStepArgs {

    @Field(() => WorkflowStepWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowStepWhereUniqueInput)
    where!: WorkflowStepWhereUniqueInput;
}
