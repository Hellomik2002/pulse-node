import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowStepWhereInput } from './workflow-step-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyWorkflowStepArgs {

    @Field(() => WorkflowStepWhereInput, {nullable:true})
    @Type(() => WorkflowStepWhereInput)
    where?: WorkflowStepWhereInput;
}
