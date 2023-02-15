import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MembershipRole } from '../prisma/membership-role.enum';
import { Team } from '../team/team.model';
import { User } from '../user/user.model';

@ObjectType()
export class Membership {

    @Field(() => Int, {nullable:false})
    teamId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    accepted!: boolean;

    @Field(() => MembershipRole, {nullable:false})
    role!: keyof typeof MembershipRole;

    @Field(() => Team, {nullable:false})
    team?: Team;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    disableImpersonation!: boolean;
}
