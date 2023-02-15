import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumMembershipRoleFieldUpdateOperationsInput } from '../prisma/enum-membership-role-field-update-operations.input';
import { TeamUpdateOneRequiredWithoutMembersNestedInput } from '../team/team-update-one-required-without-members-nested.input';

@InputType()
export class MembershipUpdateWithoutUserInput {

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    accepted?: BoolFieldUpdateOperationsInput;

    @Field(() => EnumMembershipRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumMembershipRoleFieldUpdateOperationsInput;

    @Field(() => TeamUpdateOneRequiredWithoutMembersNestedInput, {nullable:true})
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    disableImpersonation?: BoolFieldUpdateOperationsInput;
}
