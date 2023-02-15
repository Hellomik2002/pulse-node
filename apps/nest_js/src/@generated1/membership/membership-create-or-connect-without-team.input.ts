import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipWhereUniqueInput } from './membership-where-unique.input';
import { Type } from 'class-transformer';
import { MembershipCreateWithoutTeamInput } from './membership-create-without-team.input';

@InputType()
export class MembershipCreateOrConnectWithoutTeamInput {

    @Field(() => MembershipWhereUniqueInput, {nullable:false})
    @Type(() => MembershipWhereUniqueInput)
    where!: MembershipWhereUniqueInput;

    @Field(() => MembershipCreateWithoutTeamInput, {nullable:false})
    @Type(() => MembershipCreateWithoutTeamInput)
    create!: MembershipCreateWithoutTeamInput;
}
