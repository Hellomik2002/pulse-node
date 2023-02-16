import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventType } from '../event-type/event-type.model';
import { Credential } from '../credential/credential.model';
import { Membership } from '../membership/membership.model';
import { Booking } from '../booking/booking.model';
import { Schedule } from '../schedule/schedule.model';
import { SelectedCalendar } from '../selected-calendar/selected-calendar.model';
import { IdentityProvider } from '../prisma/identity-provider.enum';
import { Availability } from '../availability/availability.model';
import { Webhook } from '../webhook/webhook.model';
import { DestinationCalendar } from '../destination-calendar/destination-calendar.model';
import { GraphQLJSON } from 'graphql-type-json';
import { UserPermissionRole } from './user-permission-role.enum';
import { Impersonations } from '../impersonations/impersonations.model';
import { ApiKey } from '../api-key/api-key.model';
import { Account } from '../account/account.model';
import { Session } from '../session/session.model';
import { Feedback } from '../feedback/feedback.model';
import { Workflow } from '../workflow/workflow.model';
import { App_RoutingForms_Form } from '../app-routing-forms-form/app-routing-forms-form.model';
import { VerifiedNumber } from '../verified-number/verified-number.model';
import { Host } from '../host/host.model';
import { UserCount } from './user-count.output';

@ObjectType('CalUser')
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    username!: string | null;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Date, {nullable:true})
    emailVerified!: Date | null;

    @Field(() => String, {nullable:true})
    password!: string | null;

    @Field(() => String, {nullable:true})
    bio!: string | null;

    @Field(() => String, {nullable:true})
    avatar!: string | null;

    @Field(() => String, {nullable:false,defaultValue:'Europe/London'})
    timeZone!: string;

    @Field(() => String, {nullable:false,defaultValue:'Sunday'})
    weekStart!: string;

    @Field(() => Int, {nullable:false,defaultValue:0})
    startTime!: number;

    @Field(() => Int, {nullable:false,defaultValue:1440})
    endTime!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    bufferTime!: number;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    hideBranding!: boolean;

    @Field(() => String, {nullable:true})
    theme!: string | null;

    @Field(() => Date, {nullable:false})
    createdDate!: Date;

    @Field(() => Date, {nullable:true})
    trialEndsAt!: Date | null;

    @Field(() => [EventType], {nullable:true})
    eventTypes?: Array<EventType>;

    @Field(() => [Credential], {nullable:true})
    credentials?: Array<Credential>;

    @Field(() => [Membership], {nullable:true})
    teams?: Array<Membership>;

    @Field(() => [Booking], {nullable:true})
    bookings?: Array<Booking>;

    @Field(() => [Schedule], {nullable:true})
    schedules?: Array<Schedule>;

    @Field(() => Int, {nullable:true})
    defaultScheduleId!: number | null;

    @Field(() => [SelectedCalendar], {nullable:true})
    selectedCalendars?: Array<SelectedCalendar>;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    completedOnboarding!: boolean;

    @Field(() => String, {nullable:true})
    locale!: string | null;

    @Field(() => Int, {nullable:true,defaultValue:12})
    timeFormat!: number | null;

    @Field(() => String, {nullable:true})
    twoFactorSecret!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    twoFactorEnabled!: boolean;

    @Field(() => IdentityProvider, {nullable:false,defaultValue:'CAL'})
    identityProvider!: keyof typeof IdentityProvider;

    @Field(() => String, {nullable:true})
    identityProviderId!: string | null;

    @Field(() => [Availability], {nullable:true})
    availability?: Array<Availability>;

    @Field(() => Int, {nullable:true})
    invitedTo!: number | null;

    @Field(() => [Webhook], {nullable:true})
    webhooks?: Array<Webhook>;

    @Field(() => String, {nullable:false,defaultValue:'#292929'})
    brandColor!: string;

    @Field(() => String, {nullable:false,defaultValue:'#fafafa'})
    darkBrandColor!: string;

    @Field(() => DestinationCalendar, {nullable:true})
    destinationCalendar?: DestinationCalendar | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    away!: boolean;

    @Field(() => Boolean, {nullable:true,defaultValue:true})
    allowDynamicBooking!: boolean | null;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata!: any | null;

    @Field(() => Boolean, {nullable:true,defaultValue:false})
    verified!: boolean | null;

    @Field(() => UserPermissionRole, {nullable:false,defaultValue:'USER'})
    role!: keyof typeof UserPermissionRole;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    disableImpersonation!: boolean;

    @Field(() => [Impersonations], {nullable:true})
    impersonatedUsers?: Array<Impersonations>;

    @Field(() => [Impersonations], {nullable:true})
    impersonatedBy?: Array<Impersonations>;

    @Field(() => [ApiKey], {nullable:true})
    apiKeys?: Array<ApiKey>;

    @Field(() => [Account], {nullable:true})
    accounts?: Array<Account>;

    @Field(() => [Session], {nullable:true})
    sessions?: Array<Session>;

    @Field(() => [Feedback], {nullable:true})
    Feedback?: Array<Feedback>;

    @Field(() => [EventType], {nullable:true})
    ownedEventTypes?: Array<EventType>;

    @Field(() => [Workflow], {nullable:true})
    workflows?: Array<Workflow>;

    @Field(() => [App_RoutingForms_Form], {nullable:true})
    routingForms?: Array<App_RoutingForms_Form>;

    @Field(() => [VerifiedNumber], {nullable:true})
    verifiedNumbers?: Array<VerifiedNumber>;

    @Field(() => [Host], {nullable:true})
    hosts?: Array<Host>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
