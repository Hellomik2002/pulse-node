import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipRole } from './membership-role.enum';

@InputType()
export class NestedEnumMembershipRoleFilter {

    @Field(() => MembershipRole, {nullable:true})
    equals?: keyof typeof MembershipRole;

    @Field(() => [MembershipRole], {nullable:true})
    in?: Array<keyof typeof MembershipRole>;

    @Field(() => [MembershipRole], {nullable:true})
    notIn?: Array<keyof typeof MembershipRole>;

    @Field(() => NestedEnumMembershipRoleFilter, {nullable:true})
    not?: NestedEnumMembershipRoleFilter;
}
