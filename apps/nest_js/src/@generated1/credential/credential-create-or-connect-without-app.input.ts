import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CredentialWhereUniqueInput } from './credential-where-unique.input';
import { Type } from 'class-transformer';
import { CredentialCreateWithoutAppInput } from './credential-create-without-app.input';

@InputType()
export class CredentialCreateOrConnectWithoutAppInput {

    @Field(() => CredentialWhereUniqueInput, {nullable:false})
    @Type(() => CredentialWhereUniqueInput)
    where!: CredentialWhereUniqueInput;

    @Field(() => CredentialCreateWithoutAppInput, {nullable:false})
    @Type(() => CredentialCreateWithoutAppInput)
    create!: CredentialCreateWithoutAppInput;
}
