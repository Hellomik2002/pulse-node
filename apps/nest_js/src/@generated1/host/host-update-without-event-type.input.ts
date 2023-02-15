import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutHostsNestedInput } from '../user/user-update-one-required-without-hosts-nested.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';

@InputType()
export class HostUpdateWithoutEventTypeInput {

    @Field(() => UserUpdateOneRequiredWithoutHostsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutHostsNestedInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isFixed?: BoolFieldUpdateOperationsInput;
}
