import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutHostsNestedInput } from '../user/user-update-one-required-without-hosts-nested.input';
import { EventTypeUpdateOneRequiredWithoutHostsNestedInput } from '../event-type/event-type-update-one-required-without-hosts-nested.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';

@InputType()
export class HostUpdateInput {

    @Field(() => UserUpdateOneRequiredWithoutHostsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutHostsNestedInput;

    @Field(() => EventTypeUpdateOneRequiredWithoutHostsNestedInput, {nullable:true})
    eventType?: EventTypeUpdateOneRequiredWithoutHostsNestedInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isFixed?: BoolFieldUpdateOperationsInput;
}
