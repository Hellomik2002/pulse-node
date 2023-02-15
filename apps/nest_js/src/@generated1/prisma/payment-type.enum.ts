import { registerEnumType } from '@nestjs/graphql';

export enum PaymentType {
    STRIPE = "STRIPE"
}


registerEnumType(PaymentType, { name: 'PaymentType', description: undefined })
