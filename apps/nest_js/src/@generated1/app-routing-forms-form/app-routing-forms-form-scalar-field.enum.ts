import { registerEnumType } from '@nestjs/graphql';

export enum App_RoutingForms_FormScalarFieldEnum {
    id = "id",
    description = "description",
    routes = "routes",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name",
    fields = "fields",
    userId = "userId",
    disabled = "disabled",
    settings = "settings"
}


registerEnumType(App_RoutingForms_FormScalarFieldEnum, { name: 'App_RoutingForms_FormScalarFieldEnum', description: undefined })
