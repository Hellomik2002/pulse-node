import { registerEnumType } from '@nestjs/graphql';

export enum MembershipScalarFieldEnum {
    teamId = "teamId",
    userId = "userId",
    accepted = "accepted",
    role = "role",
    disableImpersonation = "disableImpersonation"
}


registerEnumType(MembershipScalarFieldEnum, { name: 'MembershipScalarFieldEnum', description: undefined })
