import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CredentialWhereInput } from './credential-where.input';

@InputType()
export class CredentialListRelationFilter {

    @Field(() => CredentialWhereInput, {nullable:true})
    every?: CredentialWhereInput;

    @Field(() => CredentialWhereInput, {nullable:true})
    some?: CredentialWhereInput;

    @Field(() => CredentialWhereInput, {nullable:true})
    none?: CredentialWhereInput;
}
