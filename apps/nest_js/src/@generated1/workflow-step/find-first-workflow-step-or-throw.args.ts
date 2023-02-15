import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowStepWhereInput } from './workflow-step-where.input';
import { Type } from 'class-transformer';
import { WorkflowStepOrderByWithRelationInput } from './workflow-step-order-by-with-relation.input';
import { WorkflowStepWhereUniqueInput } from './workflow-step-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WorkflowStepScalarFieldEnum } from './workflow-step-scalar-field.enum';

@ArgsType()
export class FindFirstWorkflowStepOrThrowArgs {

    @Field(() => WorkflowStepWhereInput, {nullable:true})
    @Type(() => WorkflowStepWhereInput)
    where?: WorkflowStepWhereInput;

    @Field(() => [WorkflowStepOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WorkflowStepOrderByWithRelationInput>;

    @Field(() => WorkflowStepWhereUniqueInput, {nullable:true})
    cursor?: WorkflowStepWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [WorkflowStepScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof WorkflowStepScalarFieldEnum>;
}
