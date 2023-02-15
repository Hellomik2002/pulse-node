import { registerEnumType } from '@nestjs/graphql';

export enum SchedulingType {
    ROUND_ROBIN = "ROUND_ROBIN",
    COLLECTIVE = "COLLECTIVE"
}


registerEnumType(SchedulingType, { name: 'SchedulingType', description: undefined })
