import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipCreateWithoutUserInput } from './membership-create-without-user.input';
import { Type } from 'class-transformer';
import { MembershipCreateOrConnectWithoutUserInput } from './membership-create-or-connect-without-user.input';
import { MembershipUpsertWithWhereUniqueWithoutUserInput } from './membership-upsert-with-where-unique-without-user.input';
import { MembershipCreateManyUserInputEnvelope } from './membership-create-many-user-input-envelope.input';
import { MembershipWhereUniqueInput } from './membership-where-unique.input';
import { MembershipUpdateWithWhereUniqueWithoutUserInput } from './membership-update-with-where-unique-without-user.input';
import { MembershipUpdateManyWithWhereWithoutUserInput } from './membership-update-many-with-where-without-user.input';
import { MembershipScalarWhereInput } from './membership-scalar-where.input';

@InputType()
export class MembershipUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [MembershipCreateWithoutUserInput], {nullable:true})
    @Type(() => MembershipCreateWithoutUserInput)
    create?: Array<MembershipCreateWithoutUserInput>;

    @Field(() => [MembershipCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => MembershipCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<MembershipCreateOrConnectWithoutUserInput>;

    @Field(() => [MembershipUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => MembershipUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<MembershipUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => MembershipCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => MembershipCreateManyUserInputEnvelope)
    createMany?: MembershipCreateManyUserInputEnvelope;

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

    @Field(() => [MembershipUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => MembershipUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<MembershipUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [MembershipUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => MembershipUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<MembershipUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [MembershipScalarWhereInput], {nullable:true})
    @Type(() => MembershipScalarWhereInput)
    deleteMany?: Array<MembershipScalarWhereInput>;
}
