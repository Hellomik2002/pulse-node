import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { WorkflowMethods } from '../prisma/workflow-methods.enum';
import { WorkflowReminderCountAggregate } from './workflow-reminder-count-aggregate.output';
import { WorkflowReminderAvgAggregate } from './workflow-reminder-avg-aggregate.output';
import { WorkflowReminderSumAggregate } from './workflow-reminder-sum-aggregate.output';
import { WorkflowReminderMinAggregate } from './workflow-reminder-min-aggregate.output';
import { WorkflowReminderMaxAggregate } from './workflow-reminder-max-aggregate.output';

@ObjectType()
export class WorkflowReminderGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    bookingUid!: string;

    @Field(() => WorkflowMethods, {nullable:false})
    method!: keyof typeof WorkflowMethods;

    @Field(() => Date, {nullable:false})
    scheduledDate!: Date | string;

    @Field(() => String, {nullable:true})
    referenceId?: string;

    @Field(() => Boolean, {nullable:false})
    scheduled!: boolean;

    @Field(() => Int, {nullable:false})
    workflowStepId!: number;

    @Field(() => WorkflowReminderCountAggregate, {nullable:true})
    _count?: WorkflowReminderCountAggregate;

    @Field(() => WorkflowReminderAvgAggregate, {nullable:true})
    _avg?: WorkflowReminderAvgAggregate;

    @Field(() => WorkflowReminderSumAggregate, {nullable:true})
    _sum?: WorkflowReminderSumAggregate;

    @Field(() => WorkflowReminderMinAggregate, {nullable:true})
    _min?: WorkflowReminderMinAggregate;

    @Field(() => WorkflowReminderMaxAggregate, {nullable:true})
    _max?: WorkflowReminderMaxAggregate;
}
