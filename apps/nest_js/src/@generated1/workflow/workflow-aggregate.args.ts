import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowWhereInput } from './workflow-where.input';
import { Type } from 'class-transformer';
import { WorkflowOrderByWithRelationInput } from './workflow-order-by-with-relation.input';
import { WorkflowWhereUniqueInput } from './workflow-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WorkflowCountAggregateInput } from './workflow-count-aggregate.input';
import { WorkflowAvgAggregateInput } from './workflow-avg-aggregate.input';
import { WorkflowSumAggregateInput } from './workflow-sum-aggregate.input';
import { WorkflowMinAggregateInput } from './workflow-min-aggregate.input';
import { WorkflowMaxAggregateInput } from './workflow-max-aggregate.input';

@ArgsType()
export class WorkflowAggregateArgs {

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

    @Field(() => WorkflowCountAggregateInput, {nullable:true})
    _count?: WorkflowCountAggregateInput;

    @Field(() => WorkflowAvgAggregateInput, {nullable:true})
    _avg?: WorkflowAvgAggregateInput;

    @Field(() => WorkflowSumAggregateInput, {nullable:true})
    _sum?: WorkflowSumAggregateInput;

    @Field(() => WorkflowMinAggregateInput, {nullable:true})
    _min?: WorkflowMinAggregateInput;

    @Field(() => WorkflowMaxAggregateInput, {nullable:true})
    _max?: WorkflowMaxAggregateInput;
}
