import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateNestedManyWithoutDestinationCalendarInput } from '../booking/booking-create-nested-many-without-destination-calendar.input';
import { EventTypeCreateNestedOneWithoutDestinationCalendarInput } from '../event-type/event-type-create-nested-one-without-destination-calendar.input';
import { CredentialCreateNestedOneWithoutDestinationCalendarsInput } from '../credential/credential-create-nested-one-without-destination-calendars.input';

@InputType()
export class DestinationCalendarCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    integration!: string;

    @Field(() => String, {nullable:false})
    externalId!: string;

    @Field(() => BookingCreateNestedManyWithoutDestinationCalendarInput, {nullable:true})
    booking?: BookingCreateNestedManyWithoutDestinationCalendarInput;

    @Field(() => EventTypeCreateNestedOneWithoutDestinationCalendarInput, {nullable:true})
    eventType?: EventTypeCreateNestedOneWithoutDestinationCalendarInput;

    @Field(() => CredentialCreateNestedOneWithoutDestinationCalendarsInput, {nullable:true})
    credential?: CredentialCreateNestedOneWithoutDestinationCalendarsInput;
}
