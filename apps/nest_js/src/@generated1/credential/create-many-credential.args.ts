import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CredentialCreateManyInput } from './credential-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCredentialArgs {

    @Field(() => [CredentialCreateManyInput], {nullable:false})
    @Type(() => CredentialCreateManyInput)
    data!: Array<CredentialCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
