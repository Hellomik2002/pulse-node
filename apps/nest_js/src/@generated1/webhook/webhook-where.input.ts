import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumWebhookTriggerEventsNullableListFilter } from '../prisma/enum-webhook-trigger-events-nullable-list-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { EventTypeRelationFilter } from '../event-type/event-type-relation-filter.input';
import { AppRelationFilter } from '../app/app-relation-filter.input';

@InputType()
export class WebhookWhereInput {

    @Field(() => [WebhookWhereInput], {nullable:true})
    AND?: Array<WebhookWhereInput>;

    @Field(() => [WebhookWhereInput], {nullable:true})
    OR?: Array<WebhookWhereInput>;

    @Field(() => [WebhookWhereInput], {nullable:true})
    NOT?: Array<WebhookWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    eventTypeId?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    subscriberUrl?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    payloadTemplate?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => EnumWebhookTriggerEventsNullableListFilter, {nullable:true})
    eventTriggers?: EnumWebhookTriggerEventsNullableListFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => EventTypeRelationFilter, {nullable:true})
    eventType?: EventTypeRelationFilter;

    @Field(() => AppRelationFilter, {nullable:true})
    app?: AppRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    appId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    secret?: StringNullableFilter;
}
