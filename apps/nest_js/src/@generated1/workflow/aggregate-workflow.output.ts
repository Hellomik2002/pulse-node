import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WorkflowCountAggregate } from './workflow-count-aggregate.output';
import { WorkflowAvgAggregate } from './workflow-avg-aggregate.output';
import { WorkflowSumAggregate } from './workflow-sum-aggregate.output';
import { WorkflowMinAggregate } from './workflow-min-aggregate.output';
import { WorkflowMaxAggregate } from './workflow-max-aggregate.output';

@ObjectType()
export class AggregateWorkflow {

    @Field(() => WorkflowCountAggregate, {nullable:true})
    _count?: WorkflowCountAggregate;

    @Field(() => WorkflowAvgAggregate, {nullable:true})
    _avg?: WorkflowAvgAggregate;

    @Field(() => WorkflowSumAggregate, {nullable:true})
    _sum?: WorkflowSumAggregate;

    @Field(() => WorkflowMinAggregate, {nullable:true})
    _min?: WorkflowMinAggregate;

    @Field(() => WorkflowMaxAggregate, {nullable:true})
    _max?: WorkflowMaxAggregate;
}
