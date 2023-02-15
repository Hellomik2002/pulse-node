import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { WorkflowTriggerEvents } from './workflow-trigger-events.enum';
import { TimeUnit } from '../prisma/time-unit.enum';
import { WorkflowCountAggregate } from './workflow-count-aggregate.output';
import { WorkflowAvgAggregate } from './workflow-avg-aggregate.output';
import { WorkflowSumAggregate } from './workflow-sum-aggregate.output';
import { WorkflowMinAggregate } from './workflow-min-aggregate.output';
import { WorkflowMaxAggregate } from './workflow-max-aggregate.output';

@ObjectType()
export class WorkflowGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => WorkflowTriggerEvents, {nullable:false})
    trigger!: keyof typeof WorkflowTriggerEvents;

    @Field(() => Int, {nullable:true})
    time?: number;

    @Field(() => TimeUnit, {nullable:true})
    timeUnit?: keyof typeof TimeUnit;

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
