import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CredentialCreateManyUserInput } from './credential-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class CredentialCreateManyUserInputEnvelope {

    @Field(() => [CredentialCreateManyUserInput], {nullable:false})
    @Type(() => CredentialCreateManyUserInput)
    data!: Array<CredentialCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
