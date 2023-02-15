import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { WorkflowsOnEventTypesUncheckedUpdateManyWithoutWorkflowNestedInput } from '../workflows-on-event-types/workflows-on-event-types-unchecked-update-many-without-workflow-nested.input';
import { EnumWorkflowTriggerEventsFieldUpdateOperationsInput } from '../prisma/enum-workflow-trigger-events-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableEnumTimeUnitFieldUpdateOperationsInput } from '../prisma/nullable-enum-time-unit-field-update-operations.input';

@InputType()
export class WorkflowUncheckedUpdateWithoutStepsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    userId?: IntFieldUpdateOperationsInput;

    @Field(() => WorkflowsOnEventTypesUncheckedUpdateManyWithoutWorkflowNestedInput, {nullable:true})
    activeOn?: WorkflowsOnEventTypesUncheckedUpdateManyWithoutWorkflowNestedInput;

    @Field(() => EnumWorkflowTriggerEventsFieldUpdateOperationsInput, {nullable:true})
    trigger?: EnumWorkflowTriggerEventsFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    time?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableEnumTimeUnitFieldUpdateOperationsInput, {nullable:true})
    timeUnit?: NullableEnumTimeUnitFieldUpdateOperationsInput;
}
