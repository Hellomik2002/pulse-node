import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CredentialUpdateInput } from './credential-update.input';
import { Type } from 'class-transformer';
import { CredentialWhereUniqueInput } from './credential-where-unique.input';

@ArgsType()
export class UpdateOneCredentialArgs {

    @Field(() => CredentialUpdateInput, {nullable:false})
    @Type(() => CredentialUpdateInput)
    data!: CredentialUpdateInput;

    @Field(() => CredentialWhereUniqueInput, {nullable:false})
    @Type(() => CredentialWhereUniqueInput)
    where!: CredentialWhereUniqueInput;
}
