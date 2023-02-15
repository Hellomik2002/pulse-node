import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipCreateWithoutTeamInput } from './membership-create-without-team.input';
import { Type } from 'class-transformer';
import { MembershipCreateOrConnectWithoutTeamInput } from './membership-create-or-connect-without-team.input';
import { MembershipUpsertWithWhereUniqueWithoutTeamInput } from './membership-upsert-with-where-unique-without-team.input';
import { MembershipCreateManyTeamInputEnvelope } from './membership-create-many-team-input-envelope.input';
import { MembershipWhereUniqueInput } from './membership-where-unique.input';
import { MembershipUpdateWithWhereUniqueWithoutTeamInput } from './membership-update-with-where-unique-without-team.input';
import { MembershipUpdateManyWithWhereWithoutTeamInput } from './membership-update-many-with-where-without-team.input';
import { MembershipScalarWhereInput } from './membership-scalar-where.input';

@InputType()
export class MembershipUpdateManyWithoutTeamNestedInput {

    @Field(() => [MembershipCreateWithoutTeamInput], {nullable:true})
    @Type(() => MembershipCreateWithoutTeamInput)
    create?: Array<MembershipCreateWithoutTeamInput>;

    @Field(() => [MembershipCreateOrConnectWithoutTeamInput], {nullable:true})
    @Type(() => MembershipCreateOrConnectWithoutTeamInput)
    connectOrCreate?: Array<MembershipCreateOrConnectWithoutTeamInput>;

    @Field(() => [MembershipUpsertWithWhereUniqueWithoutTeamInput], {nullable:true})
    @Type(() => MembershipUpsertWithWhereUniqueWithoutTeamInput)
    upsert?: Array<MembershipUpsertWithWhereUniqueWithoutTeamInput>;

    @Field(() => MembershipCreateManyTeamInputEnvelope, {nullable:true})
    @Type(() => MembershipCreateManyTeamInputEnvelope)
    createMany?: MembershipCreateManyTeamInputEnvelope;

    @Field(() => [MembershipWhereUniqueInput], {nullable:true})
    @Type(() => MembershipWhereUniqueInput)
    set?: Array<MembershipWhereUniqueInput>;

    @Field(() => [MembershipWhereUniqueInput], {nullable:true})
    @Type(() => MembershipWhereUniqueInput)
    disconnect?: Array<MembershipWhereUniqueInput>;

    @Field(() => [MembershipWhereUniqueInput], {nullable:true})
    @Type(() => MembershipWhereUniqueInput)
    delete?: Array<MembershipWhereUniqueInput>;

    @Field(() => [MembershipWhereUniqueInput], {nullable:true})
    @Type(() => MembershipWhereUniqueInput)
    connect?: Array<MembershipWhereUniqueInput>;

    @Field(() => [MembershipUpdateWithWhereUniqueWithoutTeamInput], {nullable:true})
    @Type(() => MembershipUpdateWithWhereUniqueWithoutTeamInput)
    update?: Array<MembershipUpdateWithWhereUniqueWithoutTeamInput>;

    @Field(() => [MembershipUpdateManyWithWhereWithoutTeamInput], {nullable:true})
    @Type(() => MembershipUpdateManyWithWhereWithoutTeamInput)
    updateMany?: Array<MembershipUpdateManyWithWhereWithoutTeamInput>;

    @Field(() => [MembershipScalarWhereInput], {nullable:true})
    @Type(() => MembershipScalarWhereInput)
    deleteMany?: Array<MembershipScalarWhereInput>;
}
