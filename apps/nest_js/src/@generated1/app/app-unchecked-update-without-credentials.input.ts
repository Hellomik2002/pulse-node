import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { AppUpdatecategoriesInput } from './app-updatecategories.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { WebhookUncheckedUpdateManyWithoutAppNestedInput } from '../webhook/webhook-unchecked-update-many-without-app-nested.input';
import { ApiKeyUncheckedUpdateManyWithoutAppNestedInput } from '../api-key/api-key-unchecked-update-many-without-app-nested.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';

@InputType()
export class AppUncheckedUpdateWithoutCredentialsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    dirName?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    keys?: any;

    @Field(() => AppUpdatecategoriesInput, {nullable:true})
    categories?: AppUpdatecategoriesInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => WebhookUncheckedUpdateManyWithoutAppNestedInput, {nullable:true})
    Webhook?: WebhookUncheckedUpdateManyWithoutAppNestedInput;

    @Field(() => ApiKeyUncheckedUpdateManyWithoutAppNestedInput, {nullable:true})
    ApiKey?: ApiKeyUncheckedUpdateManyWithoutAppNestedInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    enabled?: BoolFieldUpdateOperationsInput;
}
