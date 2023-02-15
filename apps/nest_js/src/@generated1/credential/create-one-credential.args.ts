import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CredentialCreateInput } from './credential-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCredentialArgs {

    @Field(() => CredentialCreateInput, {nullable:false})
    @Type(() => CredentialCreateInput)
    data!: CredentialCreateInput;
}
