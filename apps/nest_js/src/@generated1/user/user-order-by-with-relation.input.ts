import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EventTypeOrderByRelationAggregateInput } from '../event-type/event-type-order-by-relation-aggregate.input';
import { CredentialOrderByRelationAggregateInput } from '../credential/credential-order-by-relation-aggregate.input';
import { MembershipOrderByRelationAggregateInput } from '../membership/membership-order-by-relation-aggregate.input';
import { BookingOrderByRelationAggregateInput } from '../booking/booking-order-by-relation-aggregate.input';
import { ScheduleOrderByRelationAggregateInput } from '../schedule/schedule-order-by-relation-aggregate.input';
import { SelectedCalendarOrderByRelationAggregateInput } from '../selected-calendar/selected-calendar-order-by-relation-aggregate.input';
import { AvailabilityOrderByRelationAggregateInput } from '../availability/availability-order-by-relation-aggregate.input';
import { WebhookOrderByRelationAggregateInput } from '../webhook/webhook-order-by-relation-aggregate.input';
import { DestinationCalendarOrderByWithRelationInput } from '../destination-calendar/destination-calendar-order-by-with-relation.input';
import { ImpersonationsOrderByRelationAggregateInput } from '../impersonations/impersonations-order-by-relation-aggregate.input';
import { ApiKeyOrderByRelationAggregateInput } from '../api-key/api-key-order-by-relation-aggregate.input';
import { AccountOrderByRelationAggregateInput } from '../account/account-order-by-relation-aggregate.input';
import { SessionOrderByRelationAggregateInput } from '../session/session-order-by-relation-aggregate.input';
import { FeedbackOrderByRelationAggregateInput } from '../feedback/feedback-order-by-relation-aggregate.input';
import { WorkflowOrderByRelationAggregateInput } from '../workflow/workflow-order-by-relation-aggregate.input';
import { App_RoutingForms_FormOrderByRelationAggregateInput } from '../app-routing-forms-form/app-routing-forms-form-order-by-relation-aggregate.input';
import { VerifiedNumberOrderByRelationAggregateInput } from '../verified-number/verified-number-order-by-relation-aggregate.input';
import { HostOrderByRelationAggregateInput } from '../host/host-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    emailVerified?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    avatar?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timeZone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    weekStart?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bufferTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hideBranding?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    theme?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    trialEndsAt?: keyof typeof SortOrder;

    @Field(() => EventTypeOrderByRelationAggregateInput, {nullable:true})
    eventTypes?: EventTypeOrderByRelationAggregateInput;

    @Field(() => CredentialOrderByRelationAggregateInput, {nullable:true})
    credentials?: CredentialOrderByRelationAggregateInput;

    @Field(() => MembershipOrderByRelationAggregateInput, {nullable:true})
    teams?: MembershipOrderByRelationAggregateInput;

    @Field(() => BookingOrderByRelationAggregateInput, {nullable:true})
    bookings?: BookingOrderByRelationAggregateInput;

    @Field(() => ScheduleOrderByRelationAggregateInput, {nullable:true})
    schedules?: ScheduleOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    defaultScheduleId?: keyof typeof SortOrder;

    @Field(() => SelectedCalendarOrderByRelationAggregateInput, {nullable:true})
    selectedCalendars?: SelectedCalendarOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    completedOnboarding?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locale?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timeFormat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    twoFactorSecret?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    twoFactorEnabled?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identityProvider?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identityProviderId?: keyof typeof SortOrder;

    @Field(() => AvailabilityOrderByRelationAggregateInput, {nullable:true})
    availability?: AvailabilityOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    invitedTo?: keyof typeof SortOrder;

    @Field(() => WebhookOrderByRelationAggregateInput, {nullable:true})
    webhooks?: WebhookOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    brandColor?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    darkBrandColor?: keyof typeof SortOrder;

    @Field(() => DestinationCalendarOrderByWithRelationInput, {nullable:true})
    destinationCalendar?: DestinationCalendarOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    away?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    allowDynamicBooking?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    metadata?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    verified?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    disableImpersonation?: keyof typeof SortOrder;

    @Field(() => ImpersonationsOrderByRelationAggregateInput, {nullable:true})
    impersonatedUsers?: ImpersonationsOrderByRelationAggregateInput;

    @Field(() => ImpersonationsOrderByRelationAggregateInput, {nullable:true})
    impersonatedBy?: ImpersonationsOrderByRelationAggregateInput;

    @Field(() => ApiKeyOrderByRelationAggregateInput, {nullable:true})
    apiKeys?: ApiKeyOrderByRelationAggregateInput;

    @Field(() => AccountOrderByRelationAggregateInput, {nullable:true})
    accounts?: AccountOrderByRelationAggregateInput;

    @Field(() => SessionOrderByRelationAggregateInput, {nullable:true})
    sessions?: SessionOrderByRelationAggregateInput;

    @Field(() => FeedbackOrderByRelationAggregateInput, {nullable:true})
    Feedback?: FeedbackOrderByRelationAggregateInput;

    @Field(() => EventTypeOrderByRelationAggregateInput, {nullable:true})
    ownedEventTypes?: EventTypeOrderByRelationAggregateInput;

    @Field(() => WorkflowOrderByRelationAggregateInput, {nullable:true})
    workflows?: WorkflowOrderByRelationAggregateInput;

    @Field(() => App_RoutingForms_FormOrderByRelationAggregateInput, {nullable:true})
    routingForms?: App_RoutingForms_FormOrderByRelationAggregateInput;

    @Field(() => VerifiedNumberOrderByRelationAggregateInput, {nullable:true})
    verifiedNumbers?: VerifiedNumberOrderByRelationAggregateInput;

    @Field(() => HostOrderByRelationAggregateInput, {nullable:true})
    hosts?: HostOrderByRelationAggregateInput;
}
