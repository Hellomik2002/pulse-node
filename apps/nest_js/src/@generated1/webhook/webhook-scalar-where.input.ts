import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumWebhookTriggerEventsNullableListFilter } from '../prisma/enum-webhook-trigger-events-nullable-list-filter.input';

@InputType()
export class WebhookScalarWhereInput {

    @Field(() => [WebhookScalarWhereInput], {nullable:true})
    AND?: Array<WebhookScalarWhereInput>;

    @Field(() => [WebhookScalarWhereInput], {nullable:true})
    OR?: Array<WebhookScalarWhereInput>;

    @Field(() => [WebhookScalarWhereInput], {nullable:true})
    NOT?: Array<WebhookScalarWhereInput>;

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

    @Field(() => StringNullableFilter, {nullable:true})
    appId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    secret?: StringNullableFilter;
}
