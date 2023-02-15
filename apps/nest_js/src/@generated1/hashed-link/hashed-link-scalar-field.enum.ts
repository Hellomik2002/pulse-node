import { registerEnumType } from '@nestjs/graphql';

export enum HashedLinkScalarFieldEnum {
    id = "id",
    link = "link",
    eventTypeId = "eventTypeId"
}


registerEnumType(HashedLinkScalarFieldEnum, { name: 'HashedLinkScalarFieldEnum', description: undefined })
