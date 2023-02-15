import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowScalarWhereInput } from './workflow-scalar-where.input';
import { Type } from 'class-transformer';
import { WorkflowUpdateManyMutationInput } from './workflow-update-many-mutation.input';

@InputType()
export class WorkflowUpdateManyWithWhereWithoutUserInput {

    @Field(() => WorkflowScalarWhereInput, {nullable:false})
    @Type(() => WorkflowScalarWhereInput)
    where!: WorkflowScalarWhereInput;

    @Field(() => WorkflowUpdateManyMutationInput, {nullable:false})
    @Type(() => WorkflowUpdateManyMutationInput)
    data!: WorkflowUpdateManyMutationInput;
}
