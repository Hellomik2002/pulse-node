import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipRole } from './membership-role.enum';

@InputType()
export class EnumMembershipRoleFieldUpdateOperationsInput {

    @Field(() => MembershipRole, {nullable:true})
    set?: keyof typeof MembershipRole;
}
