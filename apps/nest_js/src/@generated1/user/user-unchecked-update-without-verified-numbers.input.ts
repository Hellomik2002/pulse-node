import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EventTypeUncheckedUpdateManyWithoutUsersNestedInput } from '../event-type/event-type-unchecked-update-many-without-users-nested.input';
import { CredentialUncheckedUpdateManyWithoutUserNestedInput } from '../credential/credential-unchecked-update-many-without-user-nested.input';
import { MembershipUncheckedUpdateManyWithoutUserNestedInput } from '../membership/membership-unchecked-update-many-without-user-nested.input';
import { BookingUncheckedUpdateManyWithoutUserNestedInput } from '../booking/booking-unchecked-update-many-without-user-nested.input';
import { ScheduleUncheckedUpdateManyWithoutUserNestedInput } from '../schedule/schedule-unchecked-update-many-without-user-nested.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { SelectedCalendarUncheckedUpdateManyWithoutUserNestedInput } from '../selected-calendar/selected-calendar-unchecked-update-many-without-user-nested.input';
import { EnumIdentityProviderFieldUpdateOperationsInput } from '../prisma/enum-identity-provider-field-update-operations.input';
import { AvailabilityUncheckedUpdateManyWithoutUserNestedInput } from '../availability/availability-unchecked-update-many-without-user-nested.input';
import { WebhookUncheckedUpdateManyWithoutUserNestedInput } from '../webhook/webhook-unchecked-update-many-without-user-nested.input';
import { DestinationCalendarUncheckedUpdateOneWithoutUserNestedInput } from '../destination-calendar/destination-calendar-unchecked-update-one-without-user-nested.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { EnumUserPermissionRoleFieldUpdateOperationsInput } from '../prisma/enum-user-permission-role-field-update-operations.input';
import { ImpersonationsUncheckedUpdateManyWithoutImpersonatedUserNestedInput } from '../impersonations/impersonations-unchecked-update-many-without-impersonated-user-nested.input';
import { ImpersonationsUncheckedUpdateManyWithoutImpersonatedByNestedInput } from '../impersonations/impersonations-unchecked-update-many-without-impersonated-by-nested.input';
import { ApiKeyUncheckedUpdateManyWithoutUserNestedInput } from '../api-key/api-key-unchecked-update-many-without-user-nested.input';
import { AccountUncheckedUpdateManyWithoutUserNestedInput } from '../account/account-unchecked-update-many-without-user-nested.input';
import { SessionUncheckedUpdateManyWithoutUserNestedInput } from '../session/session-unchecked-update-many-without-user-nested.input';
import { FeedbackUncheckedUpdateManyWithoutUserNestedInput } from '../feedback/feedback-unchecked-update-many-without-user-nested.input';
import { EventTypeUncheckedUpdateManyWithoutOwnerNestedInput } from '../event-type/event-type-unchecked-update-many-without-owner-nested.input';
import { WorkflowUncheckedUpdateManyWithoutUserNestedInput } from '../workflow/workflow-unchecked-update-many-without-user-nested.input';
import { App_RoutingForms_FormUncheckedUpdateManyWithoutUserNestedInput } from '../app-routing-forms-form/app-routing-forms-form-unchecked-update-many-without-user-nested.input';
import { HostUncheckedUpdateManyWithoutUserNestedInput } from '../host/host-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutVerifiedNumbersInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => EventTypeUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    eventTypes?: EventTypeUncheckedUpdateManyWithoutUsersNestedInput;

    @Field(() => CredentialUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    credentials?: CredentialUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => MembershipUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    teams?: MembershipUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => BookingUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ScheduleUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    schedules?: ScheduleUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    defaultScheduleId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => SelectedCalendarUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    selectedCalendars?: SelectedCalendarUncheckedUpdateManyWithoutUserNestedInput;

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

    @Field(() => AvailabilityUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    invitedTo?: NullableIntFieldUpdateOperationsInput;

    @Field(() => WebhookUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    webhooks?: WebhookUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brandColor?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    darkBrandColor?: StringFieldUpdateOperationsInput;

    @Field(() => DestinationCalendarUncheckedUpdateOneWithoutUserNestedInput, {nullable:true})
    destinationCalendar?: DestinationCalendarUncheckedUpdateOneWithoutUserNestedInput;

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

    @Field(() => ImpersonationsUncheckedUpdateManyWithoutImpersonatedUserNestedInput, {nullable:true})
    impersonatedUsers?: ImpersonationsUncheckedUpdateManyWithoutImpersonatedUserNestedInput;

    @Field(() => ImpersonationsUncheckedUpdateManyWithoutImpersonatedByNestedInput, {nullable:true})
    impersonatedBy?: ImpersonationsUncheckedUpdateManyWithoutImpersonatedByNestedInput;

    @Field(() => ApiKeyUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => AccountUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => SessionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => FeedbackUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    Feedback?: FeedbackUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => EventTypeUncheckedUpdateManyWithoutOwnerNestedInput, {nullable:true})
    ownedEventTypes?: EventTypeUncheckedUpdateManyWithoutOwnerNestedInput;

    @Field(() => WorkflowUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    workflows?: WorkflowUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => App_RoutingForms_FormUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    routingForms?: App_RoutingForms_FormUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => HostUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    hosts?: HostUncheckedUpdateManyWithoutUserNestedInput;
}
