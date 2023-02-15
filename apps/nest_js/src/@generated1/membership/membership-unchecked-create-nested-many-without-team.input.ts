import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipCreateWithoutTeamInput } from './membership-create-without-team.input';
import { Type } from 'class-transformer';
import { MembershipCreateOrConnectWithoutTeamInput } from './membership-create-or-connect-without-team.input';
import { MembershipCreateManyTeamInputEnvelope } from './membership-create-many-team-input-envelope.input';
import { MembershipWhereUniqueInput } from './membership-where-unique.input';

@InputType()
export class MembershipUncheckedCreateNestedManyWithoutTeamInput {

    @Field(() => [MembershipCreateWithoutTeamInput], {nullable:true})
    @Type(() => MembershipCreateWithoutTeamInput)
    create?: Array<MembershipCreateWithoutTeamInput>;

    @Field(() => [MembershipCreateOrConnectWithoutTeamInput], {nullable:true})
    @Type(() => MembershipCreateOrConnectWithoutTeamInput)
    connectOrCreate?: Array<MembershipCreateOrConnectWithoutTeamInput>;

    @Field(() => MembershipCreateManyTeamInputEnvelope, {nullable:true})
    @Type(() => MembershipCreateManyTeamInputEnvelope)
    createMany?: MembershipCreateManyTeamInputEnvelope;

    @Field(() => [MembershipWhereUniqueInput], {nullable:true})
    @Type(() => MembershipWhereUniqueInput)
    connect?: Array<MembershipWhereUniqueInput>;
}
