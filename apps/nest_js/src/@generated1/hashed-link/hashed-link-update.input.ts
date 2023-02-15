import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EventTypeUpdateOneRequiredWithoutHashedLinkNestedInput } from '../event-type/event-type-update-one-required-without-hashed-link-nested.input';

@InputType()
export class HashedLinkUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    link?: StringFieldUpdateOperationsInput;

    @Field(() => EventTypeUpdateOneRequiredWithoutHashedLinkNestedInput, {nullable:true})
    eventType?: EventTypeUpdateOneRequiredWithoutHashedLinkNestedInput;
}
