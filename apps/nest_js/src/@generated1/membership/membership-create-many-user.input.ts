import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MembershipRole } from '../prisma/membership-role.enum';

@InputType()
export class MembershipCreateManyUserInput {

    @Field(() => Int, {nullable:false})
    teamId!: number;

    @Field(() => Boolean, {nullable:true})
    accepted?: boolean;

    @Field(() => MembershipRole, {nullable:false})
    role!: keyof typeof MembershipRole;

    @Field(() => Boolean, {nullable:true})
    disableImpersonation?: boolean;
}
