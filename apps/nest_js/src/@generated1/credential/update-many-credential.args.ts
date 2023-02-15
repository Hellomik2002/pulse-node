import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CredentialUpdateManyMutationInput } from './credential-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CredentialWhereInput } from './credential-where.input';

@ArgsType()
export class UpdateManyCredentialArgs {

    @Field(() => CredentialUpdateManyMutationInput, {nullable:false})
    @Type(() => CredentialUpdateManyMutationInput)
    data!: CredentialUpdateManyMutationInput;

    @Field(() => CredentialWhereInput, {nullable:true})
    @Type(() => CredentialWhereInput)
    where?: CredentialWhereInput;
}
