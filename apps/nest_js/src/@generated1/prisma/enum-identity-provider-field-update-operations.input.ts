import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IdentityProvider } from './identity-provider.enum';

@InputType()
export class EnumIdentityProviderFieldUpdateOperationsInput {

    @Field(() => IdentityProvider, {nullable:true})
    set?: keyof typeof IdentityProvider;
}
