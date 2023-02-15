import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowWhereUniqueInput } from './workflow-where-unique.input';
import { Type } from 'class-transformer';
import { WorkflowCreateInput } from './workflow-create.input';
import { WorkflowUpdateInput } from './workflow-update.input';

@ArgsType()
export class UpsertOneWorkflowArgs {

    @Field(() => WorkflowWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowWhereUniqueInput)
    where!: WorkflowWhereUniqueInput;

    @Field(() => WorkflowCreateInput, {nullable:false})
    @Type(() => WorkflowCreateInput)
    create!: WorkflowCreateInput;

    @Field(() => WorkflowUpdateInput, {nullable:false})
    @Type(() => WorkflowUpdateInput)
    update!: WorkflowUpdateInput;
}
