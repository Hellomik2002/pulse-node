import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipRole } from './membership-role.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumMembershipRoleFilter } from './nested-enum-membership-role-filter.input';

@InputType()
export class NestedEnumMembershipRoleWithAggregatesFilter {

    @Field(() => MembershipRole, {nullable:true})
    equals?: keyof typeof MembershipRole;

    @Field(() => [MembershipRole], {nullable:true})
    in?: Array<keyof typeof MembershipRole>;

    @Field(() => [MembershipRole], {nullable:true})
    notIn?: Array<keyof typeof MembershipRole>;

    @Field(() => NestedEnumMembershipRoleWithAggregatesFilter, {nullable:true})
    not?: NestedEnumMembershipRoleWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumMembershipRoleFilter, {nullable:true})
    _min?: NestedEnumMembershipRoleFilter;

    @Field(() => NestedEnumMembershipRoleFilter, {nullable:true})
    _max?: NestedEnumMembershipRoleFilter;
}
