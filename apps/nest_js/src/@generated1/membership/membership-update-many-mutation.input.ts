import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumMembershipRoleFieldUpdateOperationsInput } from '../prisma/enum-membership-role-field-update-operations.input';

@InputType()
export class MembershipUpdateManyMutationInput {

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    accepted?: BoolFieldUpdateOperationsInput;

    @Field(() => EnumMembershipRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumMembershipRoleFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    disableImpersonation?: BoolFieldUpdateOperationsInput;
}
