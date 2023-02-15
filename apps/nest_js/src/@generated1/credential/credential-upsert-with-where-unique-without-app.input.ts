import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CredentialWhereUniqueInput } from './credential-where-unique.input';
import { Type } from 'class-transformer';
import { CredentialUpdateWithoutAppInput } from './credential-update-without-app.input';
import { CredentialCreateWithoutAppInput } from './credential-create-without-app.input';

@InputType()
export class CredentialUpsertWithWhereUniqueWithoutAppInput {

    @Field(() => CredentialWhereUniqueInput, {nullable:false})
    @Type(() => CredentialWhereUniqueInput)
    where!: CredentialWhereUniqueInput;

    @Field(() => CredentialUpdateWithoutAppInput, {nullable:false})
    @Type(() => CredentialUpdateWithoutAppInput)
    update!: CredentialUpdateWithoutAppInput;

    @Field(() => CredentialCreateWithoutAppInput, {nullable:false})
    @Type(() => CredentialCreateWithoutAppInput)
    create!: CredentialCreateWithoutAppInput;
}
