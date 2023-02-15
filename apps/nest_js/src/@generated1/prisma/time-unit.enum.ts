import { registerEnumType } from '@nestjs/graphql';

export enum TimeUnit {
    DAY = "DAY",
    HOUR = "HOUR",
    MINUTE = "MINUTE"
}


registerEnumType(TimeUnit, { name: 'TimeUnit', description: undefined })
