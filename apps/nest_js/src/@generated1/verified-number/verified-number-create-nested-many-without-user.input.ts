import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VerifiedNumberCreateWithoutUserInput } from './verified-number-create-without-user.input';
import { Type } from 'class-transformer';
import { VerifiedNumberCreateOrConnectWithoutUserInput } from './verified-number-create-or-connect-without-user.input';
import { VerifiedNumberCreateManyUserInputEnvelope } from './verified-number-create-many-user-input-envelope.input';
import { VerifiedNumberWhereUniqueInput } from './verified-number-where-unique.input';

@InputType()
export class VerifiedNumberCreateNestedManyWithoutUserInput {

    @Field(() => [VerifiedNumberCreateWithoutUserInput], {nullable:true})
    @Type(() => VerifiedNumberCreateWithoutUserInput)
    create?: Array<VerifiedNumberCreateWithoutUserInput>;

    @Field(() => [VerifiedNumberCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => VerifiedNumberCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<VerifiedNumberCreateOrConnectWithoutUserInput>;

    @Field(() => VerifiedNumberCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => VerifiedNumberCreateManyUserInputEnvelope)
    createMany?: VerifiedNumberCreateManyUserInputEnvelope;

    @Field(() => [VerifiedNumberWhereUniqueInput], {nullable:true})
    @Type(() => VerifiedNumberWhereUniqueInput)
    connect?: Array<VerifiedNumberWhereUniqueInput>;
}
