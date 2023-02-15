import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { EnumMembershipRoleWithAggregatesFilter } from '../prisma/enum-membership-role-with-aggregates-filter.input';

@InputType()
export class MembershipScalarWhereWithAggregatesInput {

    @Field(() => [MembershipScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MembershipScalarWhereWithAggregatesInput>;

    @Field(() => [MembershipScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MembershipScalarWhereWithAggregatesInput>;

    @Field(() => [MembershipScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MembershipScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    teamId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    accepted?: BoolWithAggregatesFilter;

    @Field(() => EnumMembershipRoleWithAggregatesFilter, {nullable:true})
    role?: EnumMembershipRoleWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    disableImpersonation?: BoolWithAggregatesFilter;
}
