import { registerEnumType } from '@nestjs/graphql';

export enum IdentityProvider {
    CAL = "CAL",
    GOOGLE = "GOOGLE",
    SAML = "SAML"
}


registerEnumType(IdentityProvider, { name: 'IdentityProvider', description: undefined })
