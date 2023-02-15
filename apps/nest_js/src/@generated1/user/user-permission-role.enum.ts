import { registerEnumType } from '@nestjs/graphql';

export enum UserPermissionRole {
    USER = "USER",
    ADMIN = "ADMIN"
}


registerEnumType(UserPermissionRole, { name: 'UserPermissionRole', description: undefined })
