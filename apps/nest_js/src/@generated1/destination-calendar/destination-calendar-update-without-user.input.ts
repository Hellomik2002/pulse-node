import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BookingUpdateManyWithoutDestinationCalendarNestedInput } from '../booking/booking-update-many-without-destination-calendar-nested.input';
import { EventTypeUpdateOneWithoutDestinationCalendarNestedInput } from '../event-type/event-type-update-one-without-destination-calendar-nested.input';
import { CredentialUpdateOneWithoutDestinationCalendarsNestedInput } from '../credential/credential-update-one-without-destination-calendars-nested.input';

@InputType()
export class DestinationCalendarUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    integration?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    externalId?: StringFieldUpdateOperationsInput;

    @Field(() => BookingUpdateManyWithoutDestinationCalendarNestedInput, {nullable:true})
    booking?: BookingUpdateManyWithoutDestinationCalendarNestedInput;

    @Field(() => EventTypeUpdateOneWithoutDestinationCalendarNestedInput, {nullable:true})
    eventType?: EventTypeUpdateOneWithoutDestinationCalendarNestedInput;

    @Field(() => CredentialUpdateOneWithoutDestinationCalendarsNestedInput, {nullable:true})
    credential?: CredentialUpdateOneWithoutDestinationCalendarsNestedInput;
}
