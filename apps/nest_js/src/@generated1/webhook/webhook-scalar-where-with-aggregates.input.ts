import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { EnumWebhookTriggerEventsNullableListFilter } from '../prisma/enum-webhook-trigger-events-nullable-list-filter.input';

@InputType()
export class WebhookScalarWhereWithAggregatesInput {

    @Field(() => [WebhookScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<WebhookScalarWhereWithAggregatesInput>;

    @Field(() => [WebhookScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<WebhookScalarWhereWithAggregatesInput>;

    @Field(() => [WebhookScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<WebhookScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    userId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    eventTypeId?: IntNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    subscriberUrl?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    payloadTemplate?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    active?: BoolWithAggregatesFilter;

    @Field(() => EnumWebhookTriggerEventsNullableListFilter, {nullable:true})
    eventTriggers?: EnumWebhookTriggerEventsNullableListFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    appId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    secret?: StringNullableWithAggregatesFilter;
}
