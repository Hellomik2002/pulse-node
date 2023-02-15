import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowWhereInput } from './workflow-where.input';
import { Type } from 'class-transformer';
import { WorkflowOrderByWithAggregationInput } from './workflow-order-by-with-aggregation.input';
import { WorkflowScalarFieldEnum } from './workflow-scalar-field.enum';
import { WorkflowScalarWhereWithAggregatesInput } from './workflow-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { WorkflowCountAggregateInput } from './workflow-count-aggregate.input';
import { WorkflowAvgAggregateInput } from './workflow-avg-aggregate.input';
import { WorkflowSumAggregateInput } from './workflow-sum-aggregate.input';
import { WorkflowMinAggregateInput } from './workflow-min-aggregate.input';
import { WorkflowMaxAggregateInput } from './workflow-max-aggregate.input';

@ArgsType()
export class WorkflowGroupByArgs {

    @Field(() => WorkflowWhereInput, {nullable:true})
    @Type(() => WorkflowWhereInput)
    where?: WorkflowWhereInput;

    @Field(() => [WorkflowOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<WorkflowOrderByWithAggregationInput>;

    @Field(() => [WorkflowScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof WorkflowScalarFieldEnum>;

    @Field(() => WorkflowScalarWhereWithAggregatesInput, {nullable:true})
    having?: WorkflowScalarWhereWithAggregatesInput;

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
