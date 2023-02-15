import { registerEnumType } from '@nestjs/graphql';

export enum VerifiedNumberScalarFieldEnum {
    id = "id",
    userId = "userId",
    phoneNumber = "phoneNumber"
}


registerEnumType(VerifiedNumberScalarFieldEnum, { name: 'VerifiedNumberScalarFieldEnum', description: undefined })
