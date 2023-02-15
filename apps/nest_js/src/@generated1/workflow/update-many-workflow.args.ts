import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowUpdateManyMutationInput } from './workflow-update-many-mutation.input';
import { Type } from 'class-transformer';
import { WorkflowWhereInput } from './workflow-where.input';

@ArgsType()
export class UpdateManyWorkflowArgs {

    @Field(() => WorkflowUpdateManyMutationInput, {nullable:false})
    @Type(() => WorkflowUpdateManyMutationInput)
    data!: WorkflowUpdateManyMutationInput;

    @Field(() => WorkflowWhereInput, {nullable:true})
    @Type(() => WorkflowWhereInput)
    where?: WorkflowWhereInput;
}
