import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CredentialWhereInput } from './credential-where.input';
import { Type } from 'class-transformer';
import { CredentialOrderByWithRelationInput } from './credential-order-by-with-relation.input';
import { CredentialWhereUniqueInput } from './credential-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CredentialScalarFieldEnum } from './credential-scalar-field.enum';

@ArgsType()
export class FindFirstCredentialArgs {

    @Field(() => CredentialWhereInput, {nullable:true})
    @Type(() => CredentialWhereInput)
    where?: CredentialWhereInput;

    @Field(() => [CredentialOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CredentialOrderByWithRelationInput>;

    @Field(() => CredentialWhereUniqueInput, {nullable:true})
    cursor?: CredentialWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CredentialScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CredentialScalarFieldEnum>;
}
