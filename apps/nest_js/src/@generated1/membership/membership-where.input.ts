import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumMembershipRoleFilter } from '../prisma/enum-membership-role-filter.input';
import { TeamRelationFilter } from '../team/team-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class MembershipWhereInput {

    @Field(() => [MembershipWhereInput], {nullable:true})
    AND?: Array<MembershipWhereInput>;

    @Field(() => [MembershipWhereInput], {nullable:true})
    OR?: Array<MembershipWhereInput>;

    @Field(() => [MembershipWhereInput], {nullable:true})
    NOT?: Array<MembershipWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    teamId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    accepted?: BoolFilter;

    @Field(() => EnumMembershipRoleFilter, {nullable:true})
    role?: EnumMembershipRoleFilter;

    @Field(() => TeamRelationFilter, {nullable:true})
    team?: TeamRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => BoolFilter, {nullable:true})
    disableImpersonation?: BoolFilter;
}
