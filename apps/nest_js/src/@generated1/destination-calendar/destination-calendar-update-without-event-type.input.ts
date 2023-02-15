import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneWithoutDestinationCalendarNestedInput } from '../user/user-update-one-without-destination-calendar-nested.input';
import { BookingUpdateManyWithoutDestinationCalendarNestedInput } from '../booking/booking-update-many-without-destination-calendar-nested.input';
import { CredentialUpdateOneWithoutDestinationCalendarsNestedInput } from '../credential/credential-update-one-without-destination-calendars-nested.input';

@InputType()
export class DestinationCalendarUpdateWithoutEventTypeInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    integration?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    externalId?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutDestinationCalendarNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutDestinationCalendarNestedInput;

    @Field(() => BookingUpdateManyWithoutDestinationCalendarNestedInput, {nullable:true})
    booking?: BookingUpdateManyWithoutDestinationCalendarNestedInput;

    @Field(() => CredentialUpdateOneWithoutDestinationCalendarsNestedInput, {nullable:true})
    credential?: CredentialUpdateOneWithoutDestinationCalendarsNestedInput;
}
