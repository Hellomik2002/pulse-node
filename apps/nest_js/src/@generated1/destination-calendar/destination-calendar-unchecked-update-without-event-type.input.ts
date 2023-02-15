import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { BookingUncheckedUpdateManyWithoutDestinationCalendarNestedInput } from '../booking/booking-unchecked-update-many-without-destination-calendar-nested.input';

@InputType()
export class DestinationCalendarUncheckedUpdateWithoutEventTypeInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    integration?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    externalId?: StringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    userId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => BookingUncheckedUpdateManyWithoutDestinationCalendarNestedInput, {nullable:true})
    booking?: BookingUncheckedUpdateManyWithoutDestinationCalendarNestedInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    credentialId?: NullableIntFieldUpdateOperationsInput;
}
