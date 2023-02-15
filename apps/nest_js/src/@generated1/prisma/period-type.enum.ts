import { registerEnumType } from '@nestjs/graphql';

export enum PeriodType {
    UNLIMITED = "UNLIMITED",
    ROLLING = "ROLLING",
    RANGE = "RANGE"
}


registerEnumType(PeriodType, { name: 'PeriodType', description: undefined })
