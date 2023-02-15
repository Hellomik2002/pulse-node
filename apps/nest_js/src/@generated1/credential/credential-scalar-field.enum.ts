import { registerEnumType } from '@nestjs/graphql';

export enum CredentialScalarFieldEnum {
    id = "id",
    type = "type",
    key = "key",
    userId = "userId",
    appId = "appId",
    invalid = "invalid"
}


registerEnumType(CredentialScalarFieldEnum, { name: 'CredentialScalarFieldEnum', description: undefined })
