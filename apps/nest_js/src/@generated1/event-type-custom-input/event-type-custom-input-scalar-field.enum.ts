import { registerEnumType } from '@nestjs/graphql';

export enum EventTypeCustomInputScalarFieldEnum {
    id = "id",
    eventTypeId = "eventTypeId",
    label = "label",
    type = "type",
    options = "options",
    required = "required",
    placeholder = "placeholder"
}


registerEnumType(EventTypeCustomInputScalarFieldEnum, { name: 'EventTypeCustomInputScalarFieldEnum', description: undefined })
