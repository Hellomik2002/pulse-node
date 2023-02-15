import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IdentityProvider } from './identity-provider.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumIdentityProviderFilter } from './nested-enum-identity-provider-filter.input';

@InputType()
export class NestedEnumIdentityProviderWithAggregatesFilter {

    @Field(() => IdentityProvider, {nullable:true})
    equals?: keyof typeof IdentityProvider;

    @Field(() => [IdentityProvider], {nullable:true})
    in?: Array<keyof typeof IdentityProvider>;

    @Field(() => [IdentityProvider], {nullable:true})
    notIn?: Array<keyof typeof IdentityProvider>;

    @Field(() => NestedEnumIdentityProviderWithAggregatesFilter, {nullable:true})
    not?: NestedEnumIdentityProviderWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumIdentityProviderFilter, {nullable:true})
    _min?: NestedEnumIdentityProviderFilter;

    @Field(() => NestedEnumIdentityProviderFilter, {nullable:true})
    _max?: NestedEnumIdentityProviderFilter;
}
