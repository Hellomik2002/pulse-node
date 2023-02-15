import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MembershipRole } from '../prisma/membership-role.enum';

@ObjectType()
export class MembershipMinAggregate {

    @Field(() => Int, {nullable:true})
    teamId?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Boolean, {nullable:true})
    accepted?: boolean;

    @Field(() => MembershipRole, {nullable:true})
    role?: keyof typeof MembershipRole;

    @Field(() => Boolean, {nullable:true})
    disableImpersonation?: boolean;
}
