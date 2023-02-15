import { registerEnumType } from '@nestjs/graphql';

export enum SelectedCalendarScalarFieldEnum {
    userId = "userId",
    integration = "integration",
    externalId = "externalId"
}


registerEnumType(SelectedCalendarScalarFieldEnum, { name: 'SelectedCalendarScalarFieldEnum', description: undefined })
