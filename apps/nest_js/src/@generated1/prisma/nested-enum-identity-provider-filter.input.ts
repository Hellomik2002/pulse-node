import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IdentityProvider } from './identity-provider.enum';

@InputType()
export class NestedEnumIdentityProviderFilter {

    @Field(() => IdentityProvider, {nullable:true})
    equals?: keyof typeof IdentityProvider;

    @Field(() => [IdentityProvider], {nullable:true})
    in?: Array<keyof typeof IdentityProvider>;

    @Field(() => [IdentityProvider], {nullable:true})
    notIn?: Array<keyof typeof IdentityProvider>;

    @Field(() => NestedEnumIdentityProviderFilter, {nullable:true})
    not?: NestedEnumIdentityProviderFilter;
}
