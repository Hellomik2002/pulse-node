import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutVerifiedNumbersNestedInput } from '../user/user-update-one-required-without-verified-numbers-nested.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class VerifiedNumberUpdateInput {

    @Field(() => UserUpdateOneRequiredWithoutVerifiedNumbersNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutVerifiedNumbersNestedInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: StringFieldUpdateOperationsInput;
}
