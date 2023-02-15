import { registerEnumType } from '@nestjs/graphql';

export enum DestinationCalendarScalarFieldEnum {
    id = "id",
    integration = "integration",
    externalId = "externalId",
    userId = "userId",
    eventTypeId = "eventTypeId",
    credentialId = "credentialId"
}


registerEnumType(DestinationCalendarScalarFieldEnum, { name: 'DestinationCalendarScalarFieldEnum', description: undefined })
