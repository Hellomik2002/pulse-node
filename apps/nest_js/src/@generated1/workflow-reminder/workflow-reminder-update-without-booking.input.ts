import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumWorkflowMethodsFieldUpdateOperationsInput } from '../prisma/enum-workflow-methods-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { WorkflowStepUpdateOneRequiredWithoutWorkflowRemindersNestedInput } from '../workflow-step/workflow-step-update-one-required-without-workflow-reminders-nested.input';

@InputType()
export class WorkflowReminderUpdateWithoutBookingInput {

    @Field(() => EnumWorkflowMethodsFieldUpdateOperationsInput, {nullable:true})
    method?: EnumWorkflowMethodsFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    scheduledDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    referenceId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    scheduled?: BoolFieldUpdateOperationsInput;

    @Field(() => WorkflowStepUpdateOneRequiredWithoutWorkflowRemindersNestedInput, {nullable:true})
    workflowStep?: WorkflowStepUpdateOneRequiredWithoutWorkflowRemindersNestedInput;
}
