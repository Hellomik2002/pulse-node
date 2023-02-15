import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventTypeUncheckedCreateNestedManyWithoutUsersInput } from '../event-type/event-type-unchecked-create-nested-many-without-users.input';
import { CredentialUncheckedCreateNestedManyWithoutUserInput } from '../credential/credential-unchecked-create-nested-many-without-user.input';
import { MembershipUncheckedCreateNestedManyWithoutUserInput } from '../membership/membership-unchecked-create-nested-many-without-user.input';
import { BookingUncheckedCreateNestedManyWithoutUserInput } from '../booking/booking-unchecked-create-nested-many-without-user.input';
import { ScheduleUncheckedCreateNestedManyWithoutUserInput } from '../schedule/schedule-unchecked-create-nested-many-without-user.input';
import { SelectedCalendarUncheckedCreateNestedManyWithoutUserInput } from '../selected-calendar/selected-calendar-unchecked-create-nested-many-without-user.input';
import { IdentityProvider } from '../prisma/identity-provider.enum';
import { AvailabilityUncheckedCreateNestedManyWithoutUserInput } from '../availability/availability-unchecked-create-nested-many-without-user.input';
import { WebhookUncheckedCreateNestedManyWithoutUserInput } from '../webhook/webhook-unchecked-create-nested-many-without-user.input';
import { DestinationCalendarUncheckedCreateNestedOneWithoutUserInput } from '../destination-calendar/destination-calendar-unchecked-create-nested-one-without-user.input';
import { GraphQLJSON } from 'graphql-type-json';
import { UserPermissionRole } from './user-permission-role.enum';
import { ImpersonationsUncheckedCreateNestedManyWithoutImpersonatedByInput } from '../impersonations/impersonations-unchecked-create-nested-many-without-impersonated-by.input';
import { ApiKeyUncheckedCreateNestedManyWithoutUserInput } from '../api-key/api-key-unchecked-create-nested-many-without-user.input';
import { AccountUncheckedCreateNestedManyWithoutUserInput } from '../account/account-unchecked-create-nested-many-without-user.input';
import { SessionUncheckedCreateNestedManyWithoutUserInput } from '../session/session-unchecked-create-nested-many-without-user.input';
import { FeedbackUncheckedCreateNestedManyWithoutUserInput } from '../feedback/feedback-unchecked-create-nested-many-without-user.input';
import { EventTypeUncheckedCreateNestedManyWithoutOwnerInput } from '../event-type/event-type-unchecked-create-nested-many-without-owner.input';
import { WorkflowUncheckedCreateNestedManyWithoutUserInput } from '../workflow/workflow-unchecked-create-nested-many-without-user.input';
import { App_RoutingForms_FormUncheckedCreateNestedManyWithoutUserInput } from '../app-routing-forms-form/app-routing-forms-form-unchecked-create-nested-many-without-user.input';
import { VerifiedNumberUncheckedCreateNestedManyWithoutUserInput } from '../verified-number/verified-number-unchecked-create-nested-many-without-user.input';
import { HostUncheckedCreateNestedManyWithoutUserInput } from '../host/host-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutImpersonatedUsersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => String, {nullable:true})
    bio?: string;

    @Field(() => String, {nullable:true})
    avatar?: string;

    @Field(() => String, {nullable:true})
    timeZone?: string;

    @Field(() => String, {nullable:true})
    weekStart?: string;

    @Field(() => Int, {nullable:true})
    startTime?: number;

    @Field(() => Int, {nullable:true})
    endTime?: number;

    @Field(() => Int, {nullable:true})
    bufferTime?: number;

    @Field(() => Boolean, {nullable:true})
    hideBranding?: boolean;

    @Field(() => String, {nullable:true})
    theme?: string;

    @Field(() => Date, {nullable:true})
    createdDate?: Date | string;

    @Field(() => Date, {nullable:true})
    trialEndsAt?: Date | string;

    @Field(() => EventTypeUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    eventTypes?: EventTypeUncheckedCreateNestedManyWithoutUsersInput;

    @Field(() => CredentialUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    credentials?: CredentialUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => MembershipUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    teams?: MembershipUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => BookingUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ScheduleUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    schedules?: ScheduleUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => Int, {nullable:true})
    defaultScheduleId?: number;

    @Field(() => SelectedCalendarUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    selectedCalendars?: SelectedCalendarUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    completedOnboarding?: boolean;

    @Field(() => String, {nullable:true})
    locale?: string;

    @Field(() => Int, {nullable:true})
    timeFormat?: number;

    @Field(() => String, {nullable:true})
    twoFactorSecret?: string;

    @Field(() => Boolean, {nullable:true})
    twoFactorEnabled?: boolean;

    @Field(() => IdentityProvider, {nullable:true})
    identityProvider?: keyof typeof IdentityProvider;

    @Field(() => String, {nullable:true})
    identityProviderId?: string;

    @Field(() => AvailabilityUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => Int, {nullable:true})
    invitedTo?: number;

    @Field(() => WebhookUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    webhooks?: WebhookUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => String, {nullable:true})
    brandColor?: string;

    @Field(() => String, {nullable:true})
    darkBrandColor?: string;

    @Field(() => DestinationCalendarUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    destinationCalendar?: DestinationCalendarUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    away?: boolean;

    @Field(() => Boolean, {nullable:true})
    allowDynamicBooking?: boolean;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Boolean, {nullable:true})
    verified?: boolean;

    @Field(() => UserPermissionRole, {nullable:true})
    role?: keyof typeof UserPermissionRole;

    @Field(() => Boolean, {nullable:true})
    disableImpersonation?: boolean;

    @Field(() => ImpersonationsUncheckedCreateNestedManyWithoutImpersonatedByInput, {nullable:true})
    impersonatedBy?: ImpersonationsUncheckedCreateNestedManyWithoutImpersonatedByInput;

    @Field(() => ApiKeyUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => AccountUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => SessionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => FeedbackUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    Feedback?: FeedbackUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => EventTypeUncheckedCreateNestedManyWithoutOwnerInput, {nullable:true})
    ownedEventTypes?: EventTypeUncheckedCreateNestedManyWithoutOwnerInput;

    @Field(() => WorkflowUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    workflows?: WorkflowUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => App_RoutingForms_FormUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    routingForms?: App_RoutingForms_FormUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => VerifiedNumberUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    verifiedNumbers?: VerifiedNumberUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => HostUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    hosts?: HostUncheckedCreateNestedManyWithoutUserInput;
}
