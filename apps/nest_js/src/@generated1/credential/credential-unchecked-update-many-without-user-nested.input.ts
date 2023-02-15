import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CredentialCreateWithoutUserInput } from './credential-create-without-user.input';
import { Type } from 'class-transformer';
import { CredentialCreateOrConnectWithoutUserInput } from './credential-create-or-connect-without-user.input';
import { CredentialUpsertWithWhereUniqueWithoutUserInput } from './credential-upsert-with-where-unique-without-user.input';
import { CredentialCreateManyUserInputEnvelope } from './credential-create-many-user-input-envelope.input';
import { CredentialWhereUniqueInput } from './credential-where-unique.input';
import { CredentialUpdateWithWhereUniqueWithoutUserInput } from './credential-update-with-where-unique-without-user.input';
import { CredentialUpdateManyWithWhereWithoutUserInput } from './credential-update-many-with-where-without-user.input';
import { CredentialScalarWhereInput } from './credential-scalar-where.input';

@InputType()
export class CredentialUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [CredentialCreateWithoutUserInput], {nullable:true})
    @Type(() => CredentialCreateWithoutUserInput)
    create?: Array<CredentialCreateWithoutUserInput>;

    @Field(() => [CredentialCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CredentialCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CredentialCreateOrConnectWithoutUserInput>;

    @Field(() => [CredentialUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CredentialUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<CredentialUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => CredentialCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CredentialCreateManyUserInputEnvelope)
    createMany?: CredentialCreateManyUserInputEnvelope;

    @Field(() => [CredentialWhereUniqueInput], {nullable:true})
    @Type(() => CredentialWhereUniqueInput)
    set?: Array<CredentialWhereUniqueInput>;

    @Field(() => [CredentialWhereUniqueInput], {nullable:true})
    @Type(() => CredentialWhereUniqueInput)
    disconnect?: Array<CredentialWhereUniqueInput>;

    @Field(() => [CredentialWhereUniqueInput], {nullable:true})
    @Type(() => CredentialWhereUniqueInput)
    delete?: Array<CredentialWhereUniqueInput>;

    @Field(() => [CredentialWhereUniqueInput], {nullable:true})
    @Type(() => CredentialWhereUniqueInput)
    connect?: Array<CredentialWhereUniqueInput>;

    @Field(() => [CredentialUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CredentialUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<CredentialUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [CredentialUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => CredentialUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<CredentialUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [CredentialScalarWhereInput], {nullable:true})
    @Type(() => CredentialScalarWhereInput)
    deleteMany?: Array<CredentialScalarWhereInput>;
}
