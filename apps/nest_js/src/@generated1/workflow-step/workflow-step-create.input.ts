import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { WorkflowActions } from '../prisma/workflow-actions.enum';
import { WorkflowCreateNestedOneWithoutStepsInput } from '../workflow/workflow-create-nested-one-without-steps.input';
import { WorkflowTemplates } from '../prisma/workflow-templates.enum';
import { WorkflowReminderCreateNestedManyWithoutWorkflowStepInput } from '../workflow-reminder/workflow-reminder-create-nested-many-without-workflow-step.input';

@InputType()
export class WorkflowStepCreateInput {

    @Field(() => Int, {nullable:false})
    stepNumber!: number;

    @Field(() => WorkflowActions, {nullable:false})
    action!: keyof typeof WorkflowActions;

    @Field(() => WorkflowCreateNestedOneWithoutStepsInput, {nullable:false})
    workflow!: WorkflowCreateNestedOneWithoutStepsInput;

    @Field(() => String, {nullable:true})
    sendTo?: string;

    @Field(() => String, {nullable:true})
    reminderBody?: string;

    @Field(() => String, {nullable:true})
    emailSubject?: string;

    @Field(() => WorkflowTemplates, {nullable:true})
    template?: keyof typeof WorkflowTemplates;

    @Field(() => WorkflowReminderCreateNestedManyWithoutWorkflowStepInput, {nullable:true})
    workflowReminders?: WorkflowReminderCreateNestedManyWithoutWorkflowStepInput;

    @Field(() => Boolean, {nullable:true})
    numberRequired?: boolean;

    @Field(() => String, {nullable:true})
    sender?: string;

    @Field(() => Boolean, {nullable:true})
    numberVerificationPending?: boolean;
}
