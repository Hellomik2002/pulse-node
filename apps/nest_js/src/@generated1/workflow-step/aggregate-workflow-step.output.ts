import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WorkflowStepCountAggregate } from './workflow-step-count-aggregate.output';
import { WorkflowStepAvgAggregate } from './workflow-step-avg-aggregate.output';
import { WorkflowStepSumAggregate } from './workflow-step-sum-aggregate.output';
import { WorkflowStepMinAggregate } from './workflow-step-min-aggregate.output';
import { WorkflowStepMaxAggregate } from './workflow-step-max-aggregate.output';

@ObjectType()
export class AggregateWorkflowStep {

    @Field(() => WorkflowStepCountAggregate, {nullable:true})
    _count?: WorkflowStepCountAggregate;

    @Field(() => WorkflowStepAvgAggregate, {nullable:true})
    _avg?: WorkflowStepAvgAggregate;

    @Field(() => WorkflowStepSumAggregate, {nullable:true})
    _sum?: WorkflowStepSumAggregate;

    @Field(() => WorkflowStepMinAggregate, {nullable:true})
    _min?: WorkflowStepMinAggregate;

    @Field(() => WorkflowStepMaxAggregate, {nullable:true})
    _max?: WorkflowStepMaxAggregate;
}
