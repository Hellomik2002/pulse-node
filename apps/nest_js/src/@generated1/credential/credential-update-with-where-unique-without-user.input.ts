import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CredentialWhereUniqueInput } from './credential-where-unique.input';
import { Type } from 'class-transformer';
import { CredentialUpdateWithoutUserInput } from './credential-update-without-user.input';

@InputType()
export class CredentialUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => CredentialWhereUniqueInput, {nullable:false})
    @Type(() => CredentialWhereUniqueInput)
    where!: CredentialWhereUniqueInput;

    @Field(() => CredentialUpdateWithoutUserInput, {nullable:false})
    @Type(() => CredentialUpdateWithoutUserInput)
    data!: CredentialUpdateWithoutUserInput;
}
