import { registerEnumType } from '@nestjs/graphql';

export enum AppCategories {
    calendar = "calendar",
    messaging = "messaging",
    other = "other",
    payment = "payment",
    video = "video",
    web3 = "web3",
    automation = "automation",
    analytics = "analytics"
}


registerEnumType(AppCategories, { name: 'AppCategories', description: undefined })
