import { registerEnumType } from '@nestjs/graphql';

export enum VerificationTokenScalarFieldEnum {
    id = "id",
    identifier = "identifier",
    token = "token",
    expires = "expires",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(VerificationTokenScalarFieldEnum, { name: 'VerificationTokenScalarFieldEnum', description: undefined })
