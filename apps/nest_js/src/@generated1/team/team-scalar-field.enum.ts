import { registerEnumType } from '@nestjs/graphql';

export enum TeamScalarFieldEnum {
    id = "id",
    name = "name",
    slug = "slug",
    logo = "logo",
    bio = "bio",
    hideBranding = "hideBranding",
    hideBookATeamMember = "hideBookATeamMember",
    createdAt = "createdAt",
    metadata = "metadata"
}


registerEnumType(TeamScalarFieldEnum, { name: 'TeamScalarFieldEnum', description: undefined })
