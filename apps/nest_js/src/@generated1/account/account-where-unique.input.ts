import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountProviderProviderAccountIdCompoundUniqueInput } from './account-provider-provider-account-id-compound-unique.input';

@InputType()
export class AccountWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => AccountProviderProviderAccountIdCompoundUniqueInput, {nullable:true})
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput;
}
