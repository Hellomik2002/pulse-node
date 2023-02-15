import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CredentialCreateWithoutAppInput } from './credential-create-without-app.input';
import { Type } from 'class-transformer';
import { CredentialCreateOrConnectWithoutAppInput } from './credential-create-or-connect-without-app.input';
import { CredentialCreateManyAppInputEnvelope } from './credential-create-many-app-input-envelope.input';
import { CredentialWhereUniqueInput } from './credential-where-unique.input';

@InputType()
export class CredentialCreateNestedManyWithoutAppInput {

    @Field(() => [CredentialCreateWithoutAppInput], {nullable:true})
    @Type(() => CredentialCreateWithoutAppInput)
    create?: Array<CredentialCreateWithoutAppInput>;

    @Field(() => [CredentialCreateOrConnectWithoutAppInput], {nullable:true})
    @Type(() => CredentialCreateOrConnectWithoutAppInput)
    connectOrCreate?: Array<CredentialCreateOrConnectWithoutAppInput>;

    @Field(() => CredentialCreateManyAppInputEnvelope, {nullable:true})
    @Type(() => CredentialCreateManyAppInputEnvelope)
    createMany?: CredentialCreateManyAppInputEnvelope;

    @Field(() => [CredentialWhereUniqueInput], {nullable:true})
    @Type(() => CredentialWhereUniqueInput)
    connect?: Array<CredentialWhereUniqueInput>;
}
