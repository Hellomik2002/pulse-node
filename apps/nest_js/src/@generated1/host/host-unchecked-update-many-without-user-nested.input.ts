import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HostCreateWithoutUserInput } from './host-create-without-user.input';
import { Type } from 'class-transformer';
import { HostCreateOrConnectWithoutUserInput } from './host-create-or-connect-without-user.input';
import { HostUpsertWithWhereUniqueWithoutUserInput } from './host-upsert-with-where-unique-without-user.input';
import { HostCreateManyUserInputEnvelope } from './host-create-many-user-input-envelope.input';
import { HostWhereUniqueInput } from './host-where-unique.input';
import { HostUpdateWithWhereUniqueWithoutUserInput } from './host-update-with-where-unique-without-user.input';
import { HostUpdateManyWithWhereWithoutUserInput } from './host-update-many-with-where-without-user.input';
import { HostScalarWhereInput } from './host-scalar-where.input';

@InputType()
export class HostUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [HostCreateWithoutUserInput], {nullable:true})
    @Type(() => HostCreateWithoutUserInput)
    create?: Array<HostCreateWithoutUserInput>;

    @Field(() => [HostCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => HostCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<HostCreateOrConnectWithoutUserInput>;

    @Field(() => [HostUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => HostUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<HostUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => HostCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => HostCreateManyUserInputEnvelope)
    createMany?: HostCreateManyUserInputEnvelope;

    @Field(() => [HostWhereUniqueInput], {nullable:true})
    @Type(() => HostWhereUniqueInput)
    set?: Array<HostWhereUniqueInput>;

    @Field(() => [HostWhereUniqueInput], {nullable:true})
    @Type(() => HostWhereUniqueInput)
    disconnect?: Array<HostWhereUniqueInput>;

    @Field(() => [HostWhereUniqueInput], {nullable:true})
    @Type(() => HostWhereUniqueInput)
    delete?: Array<HostWhereUniqueInput>;

    @Field(() => [HostWhereUniqueInput], {nullable:true})
    @Type(() => HostWhereUniqueInput)
    connect?: Array<HostWhereUniqueInput>;

    @Field(() => [HostUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => HostUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<HostUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [HostUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => HostUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<HostUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [HostScalarWhereInput], {nullable:true})
    @Type(() => HostScalarWhereInput)
    deleteMany?: Array<HostScalarWhereInput>;
}
