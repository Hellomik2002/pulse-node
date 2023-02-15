import { registerEnumType } from '@nestjs/graphql';

export enum HostScalarFieldEnum {
    id = "id",
    userId = "userId",
    eventTypeId = "eventTypeId",
    isFixed = "isFixed"
}


registerEnumType(HostScalarFieldEnum, { name: 'HostScalarFieldEnum', description: undefined })
