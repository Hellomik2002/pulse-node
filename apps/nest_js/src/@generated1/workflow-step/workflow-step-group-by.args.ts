import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowStepWhereInput } from './workflow-step-where.input';
import { Type } from 'class-transformer';
import { WorkflowStepOrderByWithAggregationInput } from './workflow-step-order-by-with-aggregation.input';
import { WorkflowStepScalarFieldEnum } from './workflow-step-scalar-field.enum';
import { WorkflowStepScalarWhereWithAggregatesInput } from './workflow-step-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { WorkflowStepCountAggregateInput } from './workflow-step-count-aggregate.input';
import { WorkflowStepAvgAggregateInput } from './workflow-step-avg-aggregate.input';
import { WorkflowStepSumAggregateInput } from './workflow-step-sum-aggregate.input';
import { WorkflowStepMinAggregateInput } from './workflow-step-min-aggregate.input';
import { WorkflowStepMaxAggregateInput } from './workflow-step-max-aggregate.input';

@ArgsType()
export class WorkflowStepGroupByArgs {

    @Field(() => WorkflowStepWhereInput, {nullable:true})
    @Type(() => WorkflowStepWhereInput)
    where?: WorkflowStepWhereInput;

    @Field(() => [WorkflowStepOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<WorkflowStepOrderByWithAggregationInput>;

    @Field(() => [WorkflowStepScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof WorkflowStepScalarFieldEnum>;

    @Field(() => WorkflowStepScalarWhereWithAggregatesInput, {nullable:true})
    having?: WorkflowStepScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => WorkflowStepCountAggregateInput, {nullable:true})
    _count?: WorkflowStepCountAggregateInput;

    @Field(() => WorkflowStepAvgAggregateInput, {nullable:true})
    _avg?: WorkflowStepAvgAggregateInput;

    @Field(() => WorkflowStepSumAggregateInput, {nullable:true})
    _sum?: WorkflowStepSumAggregateInput;

    @Field(() => WorkflowStepMinAggregateInput, {nullable:true})
    _min?: WorkflowStepMinAggregateInput;

    @Field(() => WorkflowStepMaxAggregateInput, {nullable:true})
    _max?: WorkflowStepMaxAggregateInput;
}
