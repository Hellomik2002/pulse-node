import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { WebhookUpdateeventTriggersInput } from './webhook-updateevent-triggers.input';
import { UserUpdateOneWithoutWebhooksNestedInput } from '../user/user-update-one-without-webhooks-nested.input';
import { AppUpdateOneWithoutWebhookNestedInput } from '../app/app-update-one-without-webhook-nested.input';

@InputType()
export class WebhookUpdateWithoutEventTypeInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    subscriberUrl?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    payloadTemplate?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: BoolFieldUpdateOperationsInput;

    @Field(() => WebhookUpdateeventTriggersInput, {nullable:true})
    eventTriggers?: WebhookUpdateeventTriggersInput;

    @Field(() => UserUpdateOneWithoutWebhooksNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutWebhooksNestedInput;

    @Field(() => AppUpdateOneWithoutWebhookNestedInput, {nullable:true})
    app?: AppUpdateOneWithoutWebhookNestedInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    secret?: NullableStringFieldUpdateOperationsInput;
}
