import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CredentialScalarWhereInput } from './credential-scalar-where.input';
import { Type } from 'class-transformer';
import { CredentialUpdateManyMutationInput } from './credential-update-many-mutation.input';

@InputType()
export class CredentialUpdateManyWithWhereWithoutAppInput {

    @Field(() => CredentialScalarWhereInput, {nullable:false})
    @Type(() => CredentialScalarWhereInput)
    where!: CredentialScalarWhereInput;

    @Field(() => CredentialUpdateManyMutationInput, {nullable:false})
    @Type(() => CredentialUpdateManyMutationInput)
    data!: CredentialUpdateManyMutationInput;
}
