import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipRole } from '../prisma/membership-role.enum';
import { TeamCreateNestedOneWithoutMembersInput } from '../team/team-create-nested-one-without-members.input';

@InputType()
export class MembershipCreateWithoutUserInput {

    @Field(() => Boolean, {nullable:true})
    accepted?: boolean;

    @Field(() => MembershipRole, {nullable:false})
    role!: keyof typeof MembershipRole;

    @Field(() => TeamCreateNestedOneWithoutMembersInput, {nullable:false})
    team!: TeamCreateNestedOneWithoutMembersInput;

    @Field(() => Boolean, {nullable:true})
    disableImpersonation?: boolean;
}
