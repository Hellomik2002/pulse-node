import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipRole } from '../prisma/membership-role.enum';
import { TeamCreateNestedOneWithoutMembersInput } from '../team/team-create-nested-one-without-members.input';
import { UserCreateNestedOneWithoutTeamsInput } from '../user/user-create-nested-one-without-teams.input';

@InputType()
export class MembershipCreateInput {

    @Field(() => Boolean, {nullable:true})
    accepted?: boolean;

    @Field(() => MembershipRole, {nullable:false})
    role!: keyof typeof MembershipRole;

    @Field(() => TeamCreateNestedOneWithoutMembersInput, {nullable:false})
    team!: TeamCreateNestedOneWithoutMembersInput;

    @Field(() => UserCreateNestedOneWithoutTeamsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutTeamsInput;

    @Field(() => Boolean, {nullable:true})
    disableImpersonation?: boolean;
}
