import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { WorkflowActions } from '../prisma/workflow-actions.enum';
import { WorkflowTemplates } from '../prisma/workflow-templates.enum';
import { WorkflowStepCountAggregate } from './workflow-step-count-aggregate.output';
import { WorkflowStepAvgAggregate } from './workflow-step-avg-aggregate.output';
import { WorkflowStepSumAggregate } from './workflow-step-sum-aggregate.output';
import { WorkflowStepMinAggregate } from './workflow-step-min-aggregate.output';
import { WorkflowStepMaxAggregate } from './workflow-step-max-aggregate.output';

@ObjectType()
export class WorkflowStepGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    stepNumber!: number;

    @Field(() => WorkflowActions, {nullable:false})
    action!: keyof typeof WorkflowActions;

    @Field(() => Int, {nullable:false})
    workflowId!: number;

    @Field(() => String, {nullable:true})
    sendTo?: string;

    @Field(() => String, {nullable:true})
    reminderBody?: string;

    @Field(() => String, {nullable:true})
    emailSubject?: string;

    @Field(() => WorkflowTemplates, {nullable:false})
    template!: keyof typeof WorkflowTemplates;

    @Field(() => Boolean, {nullable:true})
    numberRequired?: boolean;

    @Field(() => String, {nullable:true})
    sender?: string;

    @Field(() => Boolean, {nullable:false})
    numberVerificationPending!: boolean;

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
