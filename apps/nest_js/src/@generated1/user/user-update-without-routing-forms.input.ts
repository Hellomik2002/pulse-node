import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EventTypeUpdateManyWithoutUsersNestedInput } from '../event-type/event-type-update-many-without-users-nested.input';
import { CredentialUpdateManyWithoutUserNestedInput } from '../credential/credential-update-many-without-user-nested.input';
import { MembershipUpdateManyWithoutUserNestedInput } from '../membership/membership-update-many-without-user-nested.input';
import { BookingUpdateManyWithoutUserNestedInput } from '../booking/booking-update-many-without-user-nested.input';
import { ScheduleUpdateManyWithoutUserNestedInput } from '../schedule/schedule-update-many-without-user-nested.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { SelectedCalendarUpdateManyWithoutUserNestedInput } from '../selected-calendar/selected-calendar-update-many-without-user-nested.input';
import { EnumIdentityProviderFieldUpdateOperationsInput } from '../prisma/enum-identity-provider-field-update-operations.input';
import { AvailabilityUpdateManyWithoutUserNestedInput } from '../availability/availability-update-many-without-user-nested.input';
import { WebhookUpdateManyWithoutUserNestedInput } from '../webhook/webhook-update-many-without-user-nested.input';
import { DestinationCalendarUpdateOneWithoutUserNestedInput } from '../destination-calendar/destination-calendar-update-one-without-user-nested.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { EnumUserPermissionRoleFieldUpdateOperationsInput } from '../prisma/enum-user-permission-role-field-update-operations.input';
import { ImpersonationsUpdateManyWithoutImpersonatedUserNestedInput } from '../impersonations/impersonations-update-many-without-impersonated-user-nested.input';
import { ImpersonationsUpdateManyWithoutImpersonatedByNestedInput } from '../impersonations/impersonations-update-many-without-impersonated-by-nested.input';
import { ApiKeyUpdateManyWithoutUserNestedInput } from '../api-key/api-key-update-many-without-user-nested.input';
import { AccountUpdateManyWithoutUserNestedInput } from '../account/account-update-many-without-user-nested.input';
import { SessionUpdateManyWithoutUserNestedInput } from '../session/session-update-many-without-user-nested.input';
import { FeedbackUpdateManyWithoutUserNestedInput } from '../feedback/feedback-update-many-without-user-nested.input';
import { EventTypeUpdateManyWithoutOwnerNestedInput } from '../event-type/event-type-update-many-without-owner-nested.input';
import { WorkflowUpdateManyWithoutUserNestedInput } from '../workflow/workflow-update-many-without-user-nested.input';
import { VerifiedNumberUpdateManyWithoutUserNestedInput } from '../verified-number/verified-number-update-many-without-user-nested.input';
import { HostUpdateManyWithoutUserNestedInput } from '../host/host-update-many-without-user-nested.input';

@InputType()
export class UserUpdateWithoutRoutingFormsInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    username?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    password?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    bio?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    timeZone?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    weekStart?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    startTime?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    endTime?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    bufferTime?: IntFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    hideBranding?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    theme?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => EventTypeUpdateManyWithoutUsersNestedInput, {nullable:true})
    eventTypes?: EventTypeUpdateManyWithoutUsersNestedInput;

    @Field(() => CredentialUpdateManyWithoutUserNestedInput, {nullable:true})
    credentials?: CredentialUpdateManyWithoutUserNestedInput;

    @Field(() => MembershipUpdateManyWithoutUserNestedInput, {nullable:true})
    teams?: MembershipUpdateManyWithoutUserNestedInput;

    @Field(() => BookingUpdateManyWithoutUserNestedInput, {nullable:true})
    bookings?: BookingUpdateManyWithoutUserNestedInput;

    @Field(() => ScheduleUpdateManyWithoutUserNestedInput, {nullable:true})
    schedules?: ScheduleUpdateManyWithoutUserNestedInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    defaultScheduleId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => SelectedCalendarUpdateManyWithoutUserNestedInput, {nullable:true})
    selectedCalendars?: SelectedCalendarUpdateManyWithoutUserNestedInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    completedOnboarding?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    locale?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    timeFormat?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    twoFactorEnabled?: BoolFieldUpdateOperationsInput;

    @Field(() => EnumIdentityProviderFieldUpdateOperationsInput, {nullable:true})
    identityProvider?: EnumIdentityProviderFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    identityProviderId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => AvailabilityUpdateManyWithoutUserNestedInput, {nullable:true})
    availability?: AvailabilityUpdateManyWithoutUserNestedInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    invitedTo?: NullableIntFieldUpdateOperationsInput;

    @Field(() => WebhookUpdateManyWithoutUserNestedInput, {nullable:true})
    webhooks?: WebhookUpdateManyWithoutUserNestedInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brandColor?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    darkBrandColor?: StringFieldUpdateOperationsInput;

    @Field(() => DestinationCalendarUpdateOneWithoutUserNestedInput, {nullable:true})
    destinationCalendar?: DestinationCalendarUpdateOneWithoutUserNestedInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    away?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    allowDynamicBooking?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    verified?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => EnumUserPermissionRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumUserPermissionRoleFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    disableImpersonation?: BoolFieldUpdateOperationsInput;

    @Field(() => ImpersonationsUpdateManyWithoutImpersonatedUserNestedInput, {nullable:true})
    impersonatedUsers?: ImpersonationsUpdateManyWithoutImpersonatedUserNestedInput;

    @Field(() => ImpersonationsUpdateManyWithoutImpersonatedByNestedInput, {nullable:true})
    impersonatedBy?: ImpersonationsUpdateManyWithoutImpersonatedByNestedInput;

    @Field(() => ApiKeyUpdateManyWithoutUserNestedInput, {nullable:true})
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput;

    @Field(() => AccountUpdateManyWithoutUserNestedInput, {nullable:true})
    accounts?: AccountUpdateManyWithoutUserNestedInput;

    @Field(() => SessionUpdateManyWithoutUserNestedInput, {nullable:true})
    sessions?: SessionUpdateManyWithoutUserNestedInput;

    @Field(() => FeedbackUpdateManyWithoutUserNestedInput, {nullable:true})
    Feedback?: FeedbackUpdateManyWithoutUserNestedInput;

    @Field(() => EventTypeUpdateManyWithoutOwnerNestedInput, {nullable:true})
    ownedEventTypes?: EventTypeUpdateManyWithoutOwnerNestedInput;

    @Field(() => WorkflowUpdateManyWithoutUserNestedInput, {nullable:true})
    workflows?: WorkflowUpdateManyWithoutUserNestedInput;

    @Field(() => VerifiedNumberUpdateManyWithoutUserNestedInput, {nullable:true})
    verifiedNumbers?: VerifiedNumberUpdateManyWithoutUserNestedInput;

    @Field(() => HostUpdateManyWithoutUserNestedInput, {nullable:true})
    hosts?: HostUpdateManyWithoutUserNestedInput;
}
