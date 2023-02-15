import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUpdateOneWithoutApiKeysNestedInput } from '../user/user-update-one-without-api-keys-nested.input';
import { AppUpdateOneWithoutApiKeyNestedInput } from '../app/app-update-one-without-api-key-nested.input';

@InputType()
export class ApiKeyUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    note?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    hashedKey?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutApiKeysNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutApiKeysNestedInput;

    @Field(() => AppUpdateOneWithoutApiKeyNestedInput, {nullable:true})
    app?: AppUpdateOneWithoutApiKeyNestedInput;
}
