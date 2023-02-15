import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingUpdateOneWithoutWorkflowRemindersNestedInput } from '../booking/booking-update-one-without-workflow-reminders-nested.input';
import { EnumWorkflowMethodsFieldUpdateOperationsInput } from '../prisma/enum-workflow-methods-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';

@InputType()
export class WorkflowReminderUpdateWithoutWorkflowStepInput {

    @Field(() => BookingUpdateOneWithoutWorkflowRemindersNestedInput, {nullable:true})
    booking?: BookingUpdateOneWithoutWorkflowRemindersNestedInput;

    @Field(() => EnumWorkflowMethodsFieldUpdateOperationsInput, {nullable:true})
    method?: EnumWorkflowMethodsFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    scheduledDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    referenceId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    scheduled?: BoolFieldUpdateOperationsInput;
}
