import { registerEnumType } from '@nestjs/graphql';

export enum PaymentScalarFieldEnum {
    id = "id",
    uid = "uid",
    type = "type",
    bookingId = "bookingId",
    amount = "amount",
    fee = "fee",
    currency = "currency",
    success = "success",
    refunded = "refunded",
    data = "data",
    externalId = "externalId"
}


registerEnumType(PaymentScalarFieldEnum, { name: 'PaymentScalarFieldEnum', description: undefined })
