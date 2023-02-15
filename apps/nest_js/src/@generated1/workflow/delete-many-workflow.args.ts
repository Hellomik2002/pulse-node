import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowWhereInput } from './workflow-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyWorkflowArgs {

    @Field(() => WorkflowWhereInput, {nullable:true})
    @Type(() => WorkflowWhereInput)
    where?: WorkflowWhereInput;
}
