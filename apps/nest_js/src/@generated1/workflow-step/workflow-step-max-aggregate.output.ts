import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { WorkflowActions } from '../prisma/workflow-actions.enum';
import { WorkflowTemplates } from '../prisma/workflow-templates.enum';

@ObjectType()
export class WorkflowStepMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    stepNumber?: number;

    @Field(() => WorkflowActions, {nullable:true})
    action?: keyof typeof WorkflowActions;

    @Field(() => Int, {nullable:true})
    workflowId?: number;

    @Field(() => String, {nullable:true})
    sendTo?: string;

    @Field(() => String, {nullable:true})
    reminderBody?: string;

    @Field(() => String, {nullable:true})
    emailSubject?: string;

    @Field(() => WorkflowTemplates, {nullable:true})
    template?: keyof typeof WorkflowTemplates;

    @Field(() => Boolean, {nullable:true})
    numberRequired?: boolean;

    @Field(() => String, {nullable:true})
    sender?: string;

    @Field(() => Boolean, {nullable:true})
    numberVerificationPending?: boolean;
}
