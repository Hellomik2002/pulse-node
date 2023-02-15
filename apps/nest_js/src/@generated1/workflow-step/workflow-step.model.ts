import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { WorkflowActions } from '../prisma/workflow-actions.enum';
import { Workflow } from '../workflow/workflow.model';
import { WorkflowTemplates } from '../prisma/workflow-templates.enum';
import { WorkflowReminder } from '../workflow-reminder/workflow-reminder.model';
import { WorkflowStepCount } from './workflow-step-count.output';

@ObjectType()
export class WorkflowStep {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    stepNumber!: number;

    @Field(() => WorkflowActions, {nullable:false})
    action!: keyof typeof WorkflowActions;

    @Field(() => Int, {nullable:false})
    workflowId!: number;

    @Field(() => Workflow, {nullable:false})
    workflow?: Workflow;

    @Field(() => String, {nullable:true})
    sendTo!: string | null;

    @Field(() => String, {nullable:true})
    reminderBody!: string | null;

    @Field(() => String, {nullable:true})
    emailSubject!: string | null;

    @Field(() => WorkflowTemplates, {nullable:false,defaultValue:'REMINDER'})
    template!: keyof typeof WorkflowTemplates;

    @Field(() => [WorkflowReminder], {nullable:true})
    workflowReminders?: Array<WorkflowReminder>;

    @Field(() => Boolean, {nullable:true})
    numberRequired!: boolean | null;

    @Field(() => String, {nullable:true})
    sender!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    numberVerificationPending!: boolean;

    @Field(() => WorkflowStepCount, {nullable:false})
    _count?: WorkflowStepCount;
}
