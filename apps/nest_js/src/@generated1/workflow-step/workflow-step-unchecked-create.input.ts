import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { WorkflowActions } from '../prisma/workflow-actions.enum';
import { WorkflowTemplates } from '../prisma/workflow-templates.enum';
import { WorkflowReminderUncheckedCreateNestedManyWithoutWorkflowStepInput } from '../workflow-reminder/workflow-reminder-unchecked-create-nested-many-without-workflow-step.input';

@InputType()
export class WorkflowStepUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => WorkflowTemplates, {nullable:true})
    template?: keyof typeof WorkflowTemplates;

    @Field(() => WorkflowReminderUncheckedCreateNestedManyWithoutWorkflowStepInput, {nullable:true})
    workflowReminders?: WorkflowReminderUncheckedCreateNestedManyWithoutWorkflowStepInput;

    @Field(() => Boolean, {nullable:true})
    numberRequired?: boolean;

    @Field(() => String, {nullable:true})
    sender?: string;

    @Field(() => Boolean, {nullable:true})
    numberVerificationPending?: boolean;
}
