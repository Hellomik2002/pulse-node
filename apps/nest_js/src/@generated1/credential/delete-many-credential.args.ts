import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CredentialWhereInput } from './credential-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCredentialArgs {

    @Field(() => CredentialWhereInput, {nullable:true})
    @Type(() => CredentialWhereInput)
    where?: CredentialWhereInput;
}
