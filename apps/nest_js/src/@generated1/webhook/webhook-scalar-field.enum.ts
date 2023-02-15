import { registerEnumType } from '@nestjs/graphql';

export enum WebhookScalarFieldEnum {
    id = "id",
    userId = "userId",
    eventTypeId = "eventTypeId",
    subscriberUrl = "subscriberUrl",
    payloadTemplate = "payloadTemplate",
    createdAt = "createdAt",
    active = "active",
    eventTriggers = "eventTriggers",
    appId = "appId",
    secret = "secret"
}


registerEnumType(WebhookScalarFieldEnum, { name: 'WebhookScalarFieldEnum', description: undefined })
