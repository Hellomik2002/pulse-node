import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CredentialWhereUniqueInput } from './credential-where-unique.input';
import { Type } from 'class-transformer';
import { CredentialCreateWithoutUserInput } from './credential-create-without-user.input';

@InputType()
export class CredentialCreateOrConnectWithoutUserInput {

    @Field(() => CredentialWhereUniqueInput, {nullable:false})
    @Type(() => CredentialWhereUniqueInput)
    where!: CredentialWhereUniqueInput;

    @Field(() => CredentialCreateWithoutUserInput, {nullable:false})
    @Type(() => CredentialCreateWithoutUserInput)
    create!: CredentialCreateWithoutUserInput;
}
