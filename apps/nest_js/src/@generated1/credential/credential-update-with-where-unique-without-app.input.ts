import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CredentialWhereUniqueInput } from './credential-where-unique.input';
import { Type } from 'class-transformer';
import { CredentialUpdateWithoutAppInput } from './credential-update-without-app.input';

@InputType()
export class CredentialUpdateWithWhereUniqueWithoutAppInput {

    @Field(() => CredentialWhereUniqueInput, {nullable:false})
    @Type(() => CredentialWhereUniqueInput)
    where!: CredentialWhereUniqueInput;

    @Field(() => CredentialUpdateWithoutAppInput, {nullable:false})
    @Type(() => CredentialUpdateWithoutAppInput)
    data!: CredentialUpdateWithoutAppInput;
}
