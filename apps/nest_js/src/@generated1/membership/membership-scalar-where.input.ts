import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumMembershipRoleFilter } from '../prisma/enum-membership-role-filter.input';

@InputType()
export class MembershipScalarWhereInput {

    @Field(() => [MembershipScalarWhereInput], {nullable:true})
    AND?: Array<MembershipScalarWhereInput>;

    @Field(() => [MembershipScalarWhereInput], {nullable:true})
    OR?: Array<MembershipScalarWhereInput>;

    @Field(() => [MembershipScalarWhereInput], {nullable:true})
    NOT?: Array<MembershipScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    teamId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    accepted?: BoolFilter;

    @Field(() => EnumMembershipRoleFilter, {nullable:true})
    role?: EnumMembershipRoleFilter;

    @Field(() => BoolFilter, {nullable:true})
    disableImpersonation?: BoolFilter;
}
