import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    username = "username",
    name = "name",
    email = "email",
    emailVerified = "emailVerified",
    password = "password",
    bio = "bio",
    avatar = "avatar",
    timeZone = "timeZone",
    weekStart = "weekStart",
    startTime = "startTime",
    endTime = "endTime",
    bufferTime = "bufferTime",
    hideBranding = "hideBranding",
    theme = "theme",
    createdDate = "createdDate",
    trialEndsAt = "trialEndsAt",
    defaultScheduleId = "defaultScheduleId",
    completedOnboarding = "completedOnboarding",
    locale = "locale",
    timeFormat = "timeFormat",
    twoFactorSecret = "twoFactorSecret",
    twoFactorEnabled = "twoFactorEnabled",
    identityProvider = "identityProvider",
    identityProviderId = "identityProviderId",
    invitedTo = "invitedTo",
    brandColor = "brandColor",
    darkBrandColor = "darkBrandColor",
    away = "away",
    allowDynamicBooking = "allowDynamicBooking",
    metadata = "metadata",
    verified = "verified",
    role = "role",
    disableImpersonation = "disableImpersonation"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
