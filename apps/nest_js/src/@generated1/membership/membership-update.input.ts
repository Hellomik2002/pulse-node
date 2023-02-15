import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumMembershipRoleFieldUpdateOperationsInput } from '../prisma/enum-membership-role-field-update-operations.input';
import { TeamUpdateOneRequiredWithoutMembersNestedInput } from '../team/team-update-one-required-without-members-nested.input';
import { UserUpdateOneRequiredWithoutTeamsNestedInput } from '../user/user-update-one-required-without-teams-nested.input';

@InputType()
export class MembershipUpdateInput {

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    accepted?: BoolFieldUpdateOperationsInput;

    @Field(() => EnumMembershipRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumMembershipRoleFieldUpdateOperationsInput;

    @Field(() => TeamUpdateOneRequiredWithoutMembersNestedInput, {nullable:true})
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutTeamsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutTeamsNestedInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    disableImpersonation?: BoolFieldUpdateOperationsInput;
}
