import { registerEnumType } from '@nestjs/graphql';

export enum MembershipRole {
    MEMBER = "MEMBER",
    ADMIN = "ADMIN",
    OWNER = "OWNER"
}


registerEnumType(MembershipRole, { name: 'MembershipRole', description: undefined })
