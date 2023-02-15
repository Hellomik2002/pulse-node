import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneWithoutDestinationCalendarNestedInput } from '../user/user-update-one-without-destination-calendar-nested.input';
import { BookingUpdateManyWithoutDestinationCalendarNestedInput } from '../booking/booking-update-many-without-destination-calendar-nested.input';
import { EventTypeUpdateOneWithoutDestinationCalendarNestedInput } from '../event-type/event-type-update-one-without-destination-calendar-nested.input';

@InputType()
export class DestinationCalendarUpdateWithoutCredentialInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    integration?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    externalId?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutDestinationCalendarNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutDestinationCalendarNestedInput;

    @Field(() => BookingUpdateManyWithoutDestinationCalendarNestedInput, {nullable:true})
    booking?: BookingUpdateManyWithoutDestinationCalendarNestedInput;

    @Field(() => EventTypeUpdateOneWithoutDestinationCalendarNestedInput, {nullable:true})
    eventType?: EventTypeUpdateOneWithoutDestinationCalendarNestedInput;
}
