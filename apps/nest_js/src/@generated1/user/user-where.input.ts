import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EventTypeListRelationFilter } from '../event-type/event-type-list-relation-filter.input';
import { CredentialListRelationFilter } from '../credential/credential-list-relation-filter.input';
import { MembershipListRelationFilter } from '../membership/membership-list-relation-filter.input';
import { BookingListRelationFilter } from '../booking/booking-list-relation-filter.input';
import { ScheduleListRelationFilter } from '../schedule/schedule-list-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { SelectedCalendarListRelationFilter } from '../selected-calendar/selected-calendar-list-relation-filter.input';
import { EnumIdentityProviderFilter } from '../prisma/enum-identity-provider-filter.input';
import { AvailabilityListRelationFilter } from '../availability/availability-list-relation-filter.input';
import { WebhookListRelationFilter } from '../webhook/webhook-list-relation-filter.input';
import { DestinationCalendarRelationFilter } from '../destination-calendar/destination-calendar-relation-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { EnumUserPermissionRoleFilter } from '../prisma/enum-user-permission-role-filter.input';
import { ImpersonationsListRelationFilter } from '../impersonations/impersonations-list-relation-filter.input';
import { ApiKeyListRelationFilter } from '../api-key/api-key-list-relation-filter.input';
import { AccountListRelationFilter } from '../account/account-list-relation-filter.input';
import { SessionListRelationFilter } from '../session/session-list-relation-filter.input';
import { FeedbackListRelationFilter } from '../feedback/feedback-list-relation-filter.input';
import { WorkflowListRelationFilter } from '../workflow/workflow-list-relation-filter.input';
import { App_RoutingForms_FormListRelationFilter } from '../app-routing-forms-form/app-routing-forms-form-list-relation-filter.input';
import { VerifiedNumberListRelationFilter } from '../verified-number/verified-number-list-relation-filter.input';
import { HostListRelationFilter } from '../host/host-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    username?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    emailVerified?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    password?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    bio?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    avatar?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    timeZone?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    weekStart?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    startTime?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    endTime?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    bufferTime?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    hideBranding?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    theme?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdDate?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    trialEndsAt?: DateTimeNullableFilter;

    @Field(() => EventTypeListRelationFilter, {nullable:true})
    eventTypes?: EventTypeListRelationFilter;

    @Field(() => CredentialListRelationFilter, {nullable:true})
    credentials?: CredentialListRelationFilter;

    @Field(() => MembershipListRelationFilter, {nullable:true})
    teams?: MembershipListRelationFilter;

    @Field(() => BookingListRelationFilter, {nullable:true})
    bookings?: BookingListRelationFilter;

    @Field(() => ScheduleListRelationFilter, {nullable:true})
    schedules?: ScheduleListRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    defaultScheduleId?: IntNullableFilter;

    @Field(() => SelectedCalendarListRelationFilter, {nullable:true})
    selectedCalendars?: SelectedCalendarListRelationFilter;

    @Field(() => BoolFilter, {nullable:true})
    completedOnboarding?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    locale?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    timeFormat?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    twoFactorSecret?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    twoFactorEnabled?: BoolFilter;

    @Field(() => EnumIdentityProviderFilter, {nullable:true})
    identityProvider?: EnumIdentityProviderFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    identityProviderId?: StringNullableFilter;

    @Field(() => AvailabilityListRelationFilter, {nullable:true})
    availability?: AvailabilityListRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    invitedTo?: IntNullableFilter;

    @Field(() => WebhookListRelationFilter, {nullable:true})
    webhooks?: WebhookListRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    brandColor?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    darkBrandColor?: StringFilter;

    @Field(() => DestinationCalendarRelationFilter, {nullable:true})
    destinationCalendar?: DestinationCalendarRelationFilter;

    @Field(() => BoolFilter, {nullable:true})
    away?: BoolFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    allowDynamicBooking?: BoolNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    verified?: BoolNullableFilter;

    @Field(() => EnumUserPermissionRoleFilter, {nullable:true})
    role?: EnumUserPermissionRoleFilter;

    @Field(() => BoolFilter, {nullable:true})
    disableImpersonation?: BoolFilter;

    @Field(() => ImpersonationsListRelationFilter, {nullable:true})
    impersonatedUsers?: ImpersonationsListRelationFilter;

    @Field(() => ImpersonationsListRelationFilter, {nullable:true})
    impersonatedBy?: ImpersonationsListRelationFilter;

    @Field(() => ApiKeyListRelationFilter, {nullable:true})
    apiKeys?: ApiKeyListRelationFilter;

    @Field(() => AccountListRelationFilter, {nullable:true})
    accounts?: AccountListRelationFilter;

    @Field(() => SessionListRelationFilter, {nullable:true})
    sessions?: SessionListRelationFilter;

    @Field(() => FeedbackListRelationFilter, {nullable:true})
    Feedback?: FeedbackListRelationFilter;

    @Field(() => EventTypeListRelationFilter, {nullable:true})
    ownedEventTypes?: EventTypeListRelationFilter;

    @Field(() => WorkflowListRelationFilter, {nullable:true})
    workflows?: WorkflowListRelationFilter;

    @Field(() => App_RoutingForms_FormListRelationFilter, {nullable:true})
    routingForms?: App_RoutingForms_FormListRelationFilter;

    @Field(() => VerifiedNumberListRelationFilter, {nullable:true})
    verifiedNumbers?: VerifiedNumberListRelationFilter;

    @Field(() => HostListRelationFilter, {nullable:true})
    hosts?: HostListRelationFilter;
}
