import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CredentialWhereUniqueInput } from './credential-where-unique.input';
import { Type } from 'class-transformer';
import { CredentialCreateInput } from './credential-create.input';
import { CredentialUpdateInput } from './credential-update.input';

@ArgsType()
export class UpsertOneCredentialArgs {

    @Field(() => CredentialWhereUniqueInput, {nullable:false})
    @Type(() => CredentialWhereUniqueInput)
    where!: CredentialWhereUniqueInput;

    @Field(() => CredentialCreateInput, {nullable:false})
    @Type(() => CredentialCreateInput)
    create!: CredentialCreateInput;

    @Field(() => CredentialUpdateInput, {nullable:false})
    @Type(() => CredentialUpdateInput)
    update!: CredentialUpdateInput;
}
