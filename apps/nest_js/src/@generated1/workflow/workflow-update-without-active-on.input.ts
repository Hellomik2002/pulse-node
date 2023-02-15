import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutWorkflowsNestedInput } from '../user/user-update-one-required-without-workflows-nested.input';
import { EnumWorkflowTriggerEventsFieldUpdateOperationsInput } from '../prisma/enum-workflow-trigger-events-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableEnumTimeUnitFieldUpdateOperationsInput } from '../prisma/nullable-enum-time-unit-field-update-operations.input';
import { WorkflowStepUpdateManyWithoutWorkflowNestedInput } from '../workflow-step/workflow-step-update-many-without-workflow-nested.input';

@InputType()
export class WorkflowUpdateWithoutActiveOnInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutWorkflowsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutWorkflowsNestedInput;

    @Field(() => EnumWorkflowTriggerEventsFieldUpdateOperationsInput, {nullable:true})
    trigger?: EnumWorkflowTriggerEventsFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    time?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableEnumTimeUnitFieldUpdateOperationsInput, {nullable:true})
    timeUnit?: NullableEnumTimeUnitFieldUpdateOperationsInput;

    @Field(() => WorkflowStepUpdateManyWithoutWorkflowNestedInput, {nullable:true})
    steps?: WorkflowStepUpdateManyWithoutWorkflowNestedInput;
}
