import { registerEnumType } from '@nestjs/graphql';

export enum ApiKeyScalarFieldEnum {
    id = "id",
    userId = "userId",
    note = "note",
    createdAt = "createdAt",
    expiresAt = "expiresAt",
    lastUsedAt = "lastUsedAt",
    hashedKey = "hashedKey",
    appId = "appId"
}


registerEnumType(ApiKeyScalarFieldEnum, { name: 'ApiKeyScalarFieldEnum', description: undefined })
