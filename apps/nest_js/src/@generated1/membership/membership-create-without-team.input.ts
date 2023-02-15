import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipRole } from '../prisma/membership-role.enum';
import { UserCreateNestedOneWithoutTeamsInput } from '../user/user-create-nested-one-without-teams.input';

@InputType()
export class MembershipCreateWithoutTeamInput {

    @Field(() => Boolean, {nullable:true})
    accepted?: boolean;

    @Field(() => MembershipRole, {nullable:false})
    role!: keyof typeof MembershipRole;

    @Field(() => UserCreateNestedOneWithoutTeamsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutTeamsInput;

    @Field(() => Boolean, {nullable:true})
    disableImpersonation?: boolean;
}
