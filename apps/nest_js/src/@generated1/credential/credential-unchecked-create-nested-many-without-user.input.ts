import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CredentialCreateWithoutUserInput } from './credential-create-without-user.input';
import { Type } from 'class-transformer';
import { CredentialCreateOrConnectWithoutUserInput } from './credential-create-or-connect-without-user.input';
import { CredentialCreateManyUserInputEnvelope } from './credential-create-many-user-input-envelope.input';
import { CredentialWhereUniqueInput } from './credential-where-unique.input';

@InputType()
export class CredentialUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [CredentialCreateWithoutUserInput], {nullable:true})
    @Type(() => CredentialCreateWithoutUserInput)
    create?: Array<CredentialCreateWithoutUserInput>;

    @Field(() => [CredentialCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CredentialCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CredentialCreateOrConnectWithoutUserInput>;

    @Field(() => CredentialCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CredentialCreateManyUserInputEnvelope)
    createMany?: CredentialCreateManyUserInputEnvelope;

    @Field(() => [CredentialWhereUniqueInput], {nullable:true})
    @Type(() => CredentialWhereUniqueInput)
    connect?: Array<CredentialWhereUniqueInput>;
}
