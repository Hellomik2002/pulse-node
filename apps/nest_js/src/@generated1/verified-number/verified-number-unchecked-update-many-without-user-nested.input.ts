import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VerifiedNumberCreateWithoutUserInput } from './verified-number-create-without-user.input';
import { Type } from 'class-transformer';
import { VerifiedNumberCreateOrConnectWithoutUserInput } from './verified-number-create-or-connect-without-user.input';
import { VerifiedNumberUpsertWithWhereUniqueWithoutUserInput } from './verified-number-upsert-with-where-unique-without-user.input';
import { VerifiedNumberCreateManyUserInputEnvelope } from './verified-number-create-many-user-input-envelope.input';
import { VerifiedNumberWhereUniqueInput } from './verified-number-where-unique.input';
import { VerifiedNumberUpdateWithWhereUniqueWithoutUserInput } from './verified-number-update-with-where-unique-without-user.input';
import { VerifiedNumberUpdateManyWithWhereWithoutUserInput } from './verified-number-update-many-with-where-without-user.input';
import { VerifiedNumberScalarWhereInput } from './verified-number-scalar-where.input';

@InputType()
export class VerifiedNumberUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [VerifiedNumberCreateWithoutUserInput], {nullable:true})
    @Type(() => VerifiedNumberCreateWithoutUserInput)
    create?: Array<VerifiedNumberCreateWithoutUserInput>;

    @Field(() => [VerifiedNumberCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => VerifiedNumberCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<VerifiedNumberCreateOrConnectWithoutUserInput>;

    @Field(() => [VerifiedNumberUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => VerifiedNumberUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<VerifiedNumberUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => VerifiedNumberCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => VerifiedNumberCreateManyUserInputEnvelope)
    createMany?: VerifiedNumberCreateManyUserInputEnvelope;

    @Field(() => [VerifiedNumberWhereUniqueInput], {nullable:true})
    @Type(() => VerifiedNumberWhereUniqueInput)
    set?: Array<VerifiedNumberWhereUniqueInput>;

    @Field(() => [VerifiedNumberWhereUniqueInput], {nullable:true})
    @Type(() => VerifiedNumberWhereUniqueInput)
    disconnect?: Array<VerifiedNumberWhereUniqueInput>;

    @Field(() => [VerifiedNumberWhereUniqueInput], {nullable:true})
    @Type(() => VerifiedNumberWhereUniqueInput)
    delete?: Array<VerifiedNumberWhereUniqueInput>;

    @Field(() => [VerifiedNumberWhereUniqueInput], {nullable:true})
    @Type(() => VerifiedNumberWhereUniqueInput)
    connect?: Array<VerifiedNumberWhereUniqueInput>;

    @Field(() => [VerifiedNumberUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => VerifiedNumberUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<VerifiedNumberUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [VerifiedNumberUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => VerifiedNumberUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<VerifiedNumberUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [VerifiedNumberScalarWhereInput], {nullable:true})
    @Type(() => VerifiedNumberScalarWhereInput)
    deleteMany?: Array<VerifiedNumberScalarWhereInput>;
}
