import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CredentialCreateManyAppInput } from './credential-create-many-app.input';
import { Type } from 'class-transformer';

@InputType()
export class CredentialCreateManyAppInputEnvelope {

    @Field(() => [CredentialCreateManyAppInput], {nullable:false})
    @Type(() => CredentialCreateManyAppInput)
    data!: Array<CredentialCreateManyAppInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
