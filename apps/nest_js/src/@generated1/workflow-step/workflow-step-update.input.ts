import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumWorkflowActionsFieldUpdateOperationsInput } from '../prisma/enum-workflow-actions-field-update-operations.input';
import { WorkflowUpdateOneRequiredWithoutStepsNestedInput } from '../workflow/workflow-update-one-required-without-steps-nested.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumWorkflowTemplatesFieldUpdateOperationsInput } from '../prisma/enum-workflow-templates-field-update-operations.input';
import { WorkflowReminderUpdateManyWithoutWorkflowStepNestedInput } from '../workflow-reminder/workflow-reminder-update-many-without-workflow-step-nested.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';

@InputType()
export class WorkflowStepUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    stepNumber?: IntFieldUpdateOperationsInput;

    @Field(() => EnumWorkflowActionsFieldUpdateOperationsInput, {nullable:true})
    action?: EnumWorkflowActionsFieldUpdateOperationsInput;

    @Field(() => WorkflowUpdateOneRequiredWithoutStepsNestedInput, {nullable:true})
    workflow?: WorkflowUpdateOneRequiredWithoutStepsNestedInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    sendTo?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    reminderBody?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    emailSubject?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumWorkflowTemplatesFieldUpdateOperationsInput, {nullable:true})
    template?: EnumWorkflowTemplatesFieldUpdateOperationsInput;

    @Field(() => WorkflowReminderUpdateManyWithoutWorkflowStepNestedInput, {nullable:true})
    workflowReminders?: WorkflowReminderUpdateManyWithoutWorkflowStepNestedInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    numberRequired?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    sender?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    numberVerificationPending?: BoolFieldUpdateOperationsInput;
}
