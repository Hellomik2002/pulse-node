import { registerEnumType } from '@nestjs/graphql';

export enum App_RoutingForms_FormResponseScalarFieldEnum {
    id = "id",
    formFillerId = "formFillerId",
    formId = "formId",
    response = "response",
    createdAt = "createdAt"
}


registerEnumType(App_RoutingForms_FormResponseScalarFieldEnum, { name: 'App_RoutingForms_FormResponseScalarFieldEnum', description: undefined })
