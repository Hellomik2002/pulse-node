import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowStepWhereInput } from './workflow-step-where.input';
import { Type } from 'class-transformer';
import { WorkflowStepOrderByWithRelationInput } from './workflow-step-order-by-with-relation.input';
import { WorkflowStepWhereUniqueInput } from './workflow-step-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WorkflowStepCountAggregateInput } from './workflow-step-count-aggregate.input';
import { WorkflowStepAvgAggregateInput } from './workflow-step-avg-aggregate.input';
import { WorkflowStepSumAggregateInput } from './workflow-step-sum-aggregate.input';
import { WorkflowStepMinAggregateInput } from './workflow-step-min-aggregate.input';
import { WorkflowStepMaxAggregateInput } from './workflow-step-max-aggregate.input';

@ArgsType()
export class WorkflowStepAggregateArgs {

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
