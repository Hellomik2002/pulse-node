import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DestinationCalendarUncheckedUpdateManyWithoutCredentialNestedInput } from '../destination-calendar/destination-calendar-unchecked-update-many-without-credential-nested.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';

@InputType()
export class CredentialUncheckedUpdateWithoutAppInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    type?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    key?: any;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    userId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => DestinationCalendarUncheckedUpdateManyWithoutCredentialNestedInput, {nullable:true})
    destinationCalendars?: DestinationCalendarUncheckedUpdateManyWithoutCredentialNestedInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    invalid?: NullableBoolFieldUpdateOperationsInput;
}
