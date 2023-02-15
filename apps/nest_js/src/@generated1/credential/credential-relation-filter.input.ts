import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CredentialWhereInput } from './credential-where.input';

@InputType()
export class CredentialRelationFilter {

    @Field(() => CredentialWhereInput, {nullable:true})
    is?: CredentialWhereInput;

    @Field(() => CredentialWhereInput, {nullable:true})
    isNot?: CredentialWhereInput;
}
