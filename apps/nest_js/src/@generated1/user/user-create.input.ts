import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventTypeCreateNestedManyWithoutUsersInput } from '../event-type/event-type-create-nested-many-without-users.input';
import { CredentialCreateNestedManyWithoutUserInput } from '../credential/credential-create-nested-many-without-user.input';
import { MembershipCreateNestedManyWithoutUserInput } from '../membership/membership-create-nested-many-without-user.input';
import { BookingCreateNestedManyWithoutUserInput } from '../booking/booking-create-nested-many-without-user.input';
import { ScheduleCreateNestedManyWithoutUserInput } from '../schedule/schedule-create-nested-many-without-user.input';
import { SelectedCalendarCreateNestedManyWithoutUserInput } from '../selected-calendar/selected-calendar-create-nested-many-without-user.input';
import { IdentityProvider } from '../prisma/identity-provider.enum';
import { AvailabilityCreateNestedManyWithoutUserInput } from '../availability/availability-create-nested-many-without-user.input';
import { WebhookCreateNestedManyWithoutUserInput } from '../webhook/webhook-create-nested-many-without-user.input';
import { DestinationCalendarCreateNestedOneWithoutUserInput } from '../destination-calendar/destination-calendar-create-nested-one-without-user.input';
import { GraphQLJSON } from 'graphql-type-json';
import { UserPermissionRole } from './user-permission-role.enum';
import { ImpersonationsCreateNestedManyWithoutImpersonatedUserInput } from '../impersonations/impersonations-create-nested-many-without-impersonated-user.input';
import { ImpersonationsCreateNestedManyWithoutImpersonatedByInput } from '../impersonations/impersonations-create-nested-many-without-impersonated-by.input';
import { ApiKeyCreateNestedManyWithoutUserInput } from '../api-key/api-key-create-nested-many-without-user.input';
import { AccountCreateNestedManyWithoutUserInput } from '../account/account-create-nested-many-without-user.input';
import { SessionCreateNestedManyWithoutUserInput } from '../session/session-create-nested-many-without-user.input';
import { FeedbackCreateNestedManyWithoutUserInput } from '../feedback/feedback-create-nested-many-without-user.input';
import { EventTypeCreateNestedManyWithoutOwnerInput } from '../event-type/event-type-create-nested-many-without-owner.input';
import { WorkflowCreateNestedManyWithoutUserInput } from '../workflow/workflow-create-nested-many-without-user.input';
import { App_RoutingForms_FormCreateNestedManyWithoutUserInput } from '../app-routing-forms-form/app-routing-forms-form-create-nested-many-without-user.input';
import { VerifiedNumberCreateNestedManyWithoutUserInput } from '../verified-number/verified-number-create-nested-many-without-user.input';
import { HostCreateNestedManyWithoutUserInput } from '../host/host-create-nested-many-without-user.input';

@InputType()
export class UserCreateInput {

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

    @Field(() => EventTypeCreateNestedManyWithoutUsersInput, {nullable:true})
    eventTypes?: EventTypeCreateNestedManyWithoutUsersInput;

    @Field(() => CredentialCreateNestedManyWithoutUserInput, {nullable:true})
    credentials?: CredentialCreateNestedManyWithoutUserInput;

    @Field(() => MembershipCreateNestedManyWithoutUserInput, {nullable:true})
    teams?: MembershipCreateNestedManyWithoutUserInput;

    @Field(() => BookingCreateNestedManyWithoutUserInput, {nullable:true})
    bookings?: BookingCreateNestedManyWithoutUserInput;

    @Field(() => ScheduleCreateNestedManyWithoutUserInput, {nullable:true})
    schedules?: ScheduleCreateNestedManyWithoutUserInput;

    @Field(() => Int, {nullable:true})
    defaultScheduleId?: number;

    @Field(() => SelectedCalendarCreateNestedManyWithoutUserInput, {nullable:true})
    selectedCalendars?: SelectedCalendarCreateNestedManyWithoutUserInput;

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

    @Field(() => AvailabilityCreateNestedManyWithoutUserInput, {nullable:true})
    availability?: AvailabilityCreateNestedManyWithoutUserInput;

    @Field(() => Int, {nullable:true})
    invitedTo?: number;

    @Field(() => WebhookCreateNestedManyWithoutUserInput, {nullable:true})
    webhooks?: WebhookCreateNestedManyWithoutUserInput;

    @Field(() => String, {nullable:true})
    brandColor?: string;

    @Field(() => String, {nullable:true})
    darkBrandColor?: string;

    @Field(() => DestinationCalendarCreateNestedOneWithoutUserInput, {nullable:true})
    destinationCalendar?: DestinationCalendarCreateNestedOneWithoutUserInput;

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

    @Field(() => ImpersonationsCreateNestedManyWithoutImpersonatedUserInput, {nullable:true})
    impersonatedUsers?: ImpersonationsCreateNestedManyWithoutImpersonatedUserInput;

    @Field(() => ImpersonationsCreateNestedManyWithoutImpersonatedByInput, {nullable:true})
    impersonatedBy?: ImpersonationsCreateNestedManyWithoutImpersonatedByInput;

    @Field(() => ApiKeyCreateNestedManyWithoutUserInput, {nullable:true})
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput;

    @Field(() => AccountCreateNestedManyWithoutUserInput, {nullable:true})
    accounts?: AccountCreateNestedManyWithoutUserInput;

    @Field(() => SessionCreateNestedManyWithoutUserInput, {nullable:true})
    sessions?: SessionCreateNestedManyWithoutUserInput;

    @Field(() => FeedbackCreateNestedManyWithoutUserInput, {nullable:true})
    Feedback?: FeedbackCreateNestedManyWithoutUserInput;

    @Field(() => EventTypeCreateNestedManyWithoutOwnerInput, {nullable:true})
    ownedEventTypes?: EventTypeCreateNestedManyWithoutOwnerInput;

    @Field(() => WorkflowCreateNestedManyWithoutUserInput, {nullable:true})
    workflows?: WorkflowCreateNestedManyWithoutUserInput;

    @Field(() => App_RoutingForms_FormCreateNestedManyWithoutUserInput, {nullable:true})
    routingForms?: App_RoutingForms_FormCreateNestedManyWithoutUserInput;

    @Field(() => VerifiedNumberCreateNestedManyWithoutUserInput, {nullable:true})
    verifiedNumbers?: VerifiedNumberCreateNestedManyWithoutUserInput;

    @Field(() => HostCreateNestedManyWithoutUserInput, {nullable:true})
    hosts?: HostCreateNestedManyWithoutUserInput;
}
