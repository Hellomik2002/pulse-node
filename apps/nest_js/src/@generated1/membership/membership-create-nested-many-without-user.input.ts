import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipCreateWithoutUserInput } from './membership-create-without-user.input';
import { Type } from 'class-transformer';
import { MembershipCreateOrConnectWithoutUserInput } from './membership-create-or-connect-without-user.input';
import { MembershipCreateManyUserInputEnvelope } from './membership-create-many-user-input-envelope.input';
import { MembershipWhereUniqueInput } from './membership-where-unique.input';

@InputType()
export class MembershipCreateNestedManyWithoutUserInput {

    @Field(() => [MembershipCreateWithoutUserInput], {nullable:true})
    @Type(() => MembershipCreateWithoutUserInput)
    create?: Array<MembershipCreateWithoutUserInput>;

    @Field(() => [MembershipCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => MembershipCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<MembershipCreateOrConnectWithoutUserInput>;

    @Field(() => MembershipCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => MembershipCreateManyUserInputEnvelope)
    createMany?: MembershipCreateManyUserInputEnvelope;

    @Field(() => [MembershipWhereUniqueInput], {nullable:true})
    @Type(() => MembershipWhereUniqueInput)
    connect?: Array<MembershipWhereUniqueInput>;
}
