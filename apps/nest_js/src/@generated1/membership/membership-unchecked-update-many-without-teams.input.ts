import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumMembershipRoleFieldUpdateOperationsInput } from '../prisma/enum-membership-role-field-update-operations.input';

@InputType()
export class MembershipUncheckedUpdateManyWithoutTeamsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    teamId?: IntFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    accepted?: BoolFieldUpdateOperationsInput;

    @Field(() => EnumMembershipRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumMembershipRoleFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    disableImpersonation?: BoolFieldUpdateOperationsInput;
}
