import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowUpdateInput } from './workflow-update.input';
import { Type } from 'class-transformer';
import { WorkflowWhereUniqueInput } from './workflow-where-unique.input';

@ArgsType()
export class UpdateOneWorkflowArgs {

    @Field(() => WorkflowUpdateInput, {nullable:false})
    @Type(() => WorkflowUpdateInput)
    data!: WorkflowUpdateInput;

    @Field(() => WorkflowWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowWhereUniqueInput)
    where!: WorkflowWhereUniqueInput;
}
