import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowsOnEventTypesWhereInput } from './workflows-on-event-types-where.input';
import { Type } from 'class-transformer';
import { WorkflowsOnEventTypesOrderByWithRelationInput } from './workflows-on-event-types-order-by-with-relation.input';
import { WorkflowsOnEventTypesWhereUniqueInput } from './workflows-on-event-types-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WorkflowsOnEventTypesScalarFieldEnum } from './workflows-on-event-types-scalar-field.enum';

@ArgsType()
export class FindManyWorkflowsOnEventTypesArgs {

    @Field(() => WorkflowsOnEventTypesWhereInput, {nullable:true})
    @Type(() => WorkflowsOnEventTypesWhereInput)
    where?: WorkflowsOnEventTypesWhereInput;

    @Field(() => [WorkflowsOnEventTypesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WorkflowsOnEventTypesOrderByWithRelationInput>;

    @Field(() => WorkflowsOnEventTypesWhereUniqueInput, {nullable:true})
    cursor?: WorkflowsOnEventTypesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [WorkflowsOnEventTypesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof WorkflowsOnEventTypesScalarFieldEnum>;
}
