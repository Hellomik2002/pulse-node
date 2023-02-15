import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CredentialWhereUniqueInput } from './credential-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueCredentialOrThrowArgs {

    @Field(() => CredentialWhereUniqueInput, {nullable:false})
    @Type(() => CredentialWhereUniqueInput)
    where!: CredentialWhereUniqueInput;
}
