import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CredentialCreateWithoutAppInput } from './credential-create-without-app.input';
import { Type } from 'class-transformer';
import { CredentialCreateOrConnectWithoutAppInput } from './credential-create-or-connect-without-app.input';
import { CredentialUpsertWithWhereUniqueWithoutAppInput } from './credential-upsert-with-where-unique-without-app.input';
import { CredentialCreateManyAppInputEnvelope } from './credential-create-many-app-input-envelope.input';
import { CredentialWhereUniqueInput } from './credential-where-unique.input';
import { CredentialUpdateWithWhereUniqueWithoutAppInput } from './credential-update-with-where-unique-without-app.input';
import { CredentialUpdateManyWithWhereWithoutAppInput } from './credential-update-many-with-where-without-app.input';
import { CredentialScalarWhereInput } from './credential-scalar-where.input';

@InputType()
export class CredentialUncheckedUpdateManyWithoutAppNestedInput {

    @Field(() => [CredentialCreateWithoutAppInput], {nullable:true})
    @Type(() => CredentialCreateWithoutAppInput)
    create?: Array<CredentialCreateWithoutAppInput>;

    @Field(() => [CredentialCreateOrConnectWithoutAppInput], {nullable:true})
    @Type(() => CredentialCreateOrConnectWithoutAppInput)
    connectOrCreate?: Array<CredentialCreateOrConnectWithoutAppInput>;

    @Field(() => [CredentialUpsertWithWhereUniqueWithoutAppInput], {nullable:true})
    @Type(() => CredentialUpsertWithWhereUniqueWithoutAppInput)
    upsert?: Array<CredentialUpsertWithWhereUniqueWithoutAppInput>;

    @Field(() => CredentialCreateManyAppInputEnvelope, {nullable:true})
    @Type(() => CredentialCreateManyAppInputEnvelope)
    createMany?: CredentialCreateManyAppInputEnvelope;

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

    @Field(() => [CredentialUpdateWithWhereUniqueWithoutAppInput], {nullable:true})
    @Type(() => CredentialUpdateWithWhereUniqueWithoutAppInput)
    update?: Array<CredentialUpdateWithWhereUniqueWithoutAppInput>;

    @Field(() => [CredentialUpdateManyWithWhereWithoutAppInput], {nullable:true})
    @Type(() => CredentialUpdateManyWithWhereWithoutAppInput)
    updateMany?: Array<CredentialUpdateManyWithWhereWithoutAppInput>;

    @Field(() => [CredentialScalarWhereInput], {nullable:true})
    @Type(() => CredentialScalarWhereInput)
    deleteMany?: Array<CredentialScalarWhereInput>;
}
