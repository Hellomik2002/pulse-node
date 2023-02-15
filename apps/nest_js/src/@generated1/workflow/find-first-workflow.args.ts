import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowWhereInput } from './workflow-where.input';
import { Type } from 'class-transformer';
import { WorkflowOrderByWithRelationInput } from './workflow-order-by-with-relation.input';
import { WorkflowWhereUniqueInput } from './workflow-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WorkflowScalarFieldEnum } from './workflow-scalar-field.enum';

@ArgsType()
export class FindFirstWorkflowArgs {

    @Field(() => WorkflowWhereInput, {nullable:true})
    @Type(() => WorkflowWhereInput)
    where?: WorkflowWhereInput;

    @Field(() => [WorkflowOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WorkflowOrderByWithRelationInput>;

    @Field(() => WorkflowWhereUniqueInput, {nullable:true})
    cursor?: WorkflowWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [WorkflowScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof WorkflowScalarFieldEnum>;
}
