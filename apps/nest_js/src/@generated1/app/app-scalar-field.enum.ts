import { registerEnumType } from '@nestjs/graphql';

export enum AppScalarFieldEnum {
    slug = "slug",
    dirName = "dirName",
    keys = "keys",
    categories = "categories",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    enabled = "enabled"
}


registerEnumType(AppScalarFieldEnum, { name: 'AppScalarFieldEnum', description: undefined })
