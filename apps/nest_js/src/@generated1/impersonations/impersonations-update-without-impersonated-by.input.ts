import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutImpersonatedUsersNestedInput } from '../user/user-update-one-required-without-impersonated-users-nested.input';

@InputType()
export class ImpersonationsUpdateWithoutImpersonatedByInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutImpersonatedUsersNestedInput, {nullable:true})
    impersonatedUser?: UserUpdateOneRequiredWithoutImpersonatedUsersNestedInput;
}
