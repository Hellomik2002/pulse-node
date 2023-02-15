import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowCreateInput } from './workflow-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneWorkflowArgs {

    @Field(() => WorkflowCreateInput, {nullable:false})
    @Type(() => WorkflowCreateInput)
    data!: WorkflowCreateInput;
}
