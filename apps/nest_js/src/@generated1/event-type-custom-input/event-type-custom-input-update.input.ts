import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeUpdateOneRequiredWithoutCustomInputsNestedInput } from '../event-type/event-type-update-one-required-without-custom-inputs-nested.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumEventTypeCustomInputTypeFieldUpdateOperationsInput } from '../prisma/enum-event-type-custom-input-type-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';

@InputType()
export class EventTypeCustomInputUpdateInput {

    @Field(() => EventTypeUpdateOneRequiredWithoutCustomInputsNestedInput, {nullable:true})
    eventType?: EventTypeUpdateOneRequiredWithoutCustomInputsNestedInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    label?: StringFieldUpdateOperationsInput;

    @Field(() => EnumEventTypeCustomInputTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumEventTypeCustomInputTypeFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    required?: BoolFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    placeholder?: StringFieldUpdateOperationsInput;
}
