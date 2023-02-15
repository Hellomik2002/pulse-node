import { registerEnumType } from '@nestjs/graphql';

export enum ResetPasswordRequestScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    email = "email",
    expires = "expires"
}


registerEnumType(ResetPasswordRequestScalarFieldEnum, { name: 'ResetPasswordRequestScalarFieldEnum', description: undefined })
