import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutImpersonatedByNestedInput } from '../user/user-update-one-required-without-impersonated-by-nested.input';

@InputType()
export class ImpersonationsUpdateWithoutImpersonatedUserInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutImpersonatedByNestedInput, {nullable:true})
    impersonatedBy?: UserUpdateOneRequiredWithoutImpersonatedByNestedInput;
}
