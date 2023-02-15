import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipWhereUniqueInput } from './membership-where-unique.input';
import { Type } from 'class-transformer';
import { MembershipUpdateWithoutTeamInput } from './membership-update-without-team.input';
import { MembershipCreateWithoutTeamInput } from './membership-create-without-team.input';

@InputType()
export class MembershipUpsertWithWhereUniqueWithoutTeamInput {

    @Field(() => MembershipWhereUniqueInput, {nullable:false})
    @Type(() => MembershipWhereUniqueInput)
    where!: MembershipWhereUniqueInput;

    @Field(() => MembershipUpdateWithoutTeamInput, {nullable:false})
    @Type(() => MembershipUpdateWithoutTeamInput)
    update!: MembershipUpdateWithoutTeamInput;

    @Field(() => MembershipCreateWithoutTeamInput, {nullable:false})
    @Type(() => MembershipCreateWithoutTeamInput)
    create!: MembershipCreateWithoutTeamInput;
}
