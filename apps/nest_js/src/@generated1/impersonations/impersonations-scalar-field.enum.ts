import { registerEnumType } from '@nestjs/graphql';

export enum ImpersonationsScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    impersonatedUserId = "impersonatedUserId",
    impersonatedById = "impersonatedById"
}


registerEnumType(ImpersonationsScalarFieldEnum, { name: 'ImpersonationsScalarFieldEnum', description: undefined })
