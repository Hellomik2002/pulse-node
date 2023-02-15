import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeUpdateOneWithoutAvailabilityNestedInput } from '../event-type/event-type-update-one-without-availability-nested.input';
import { AvailabilityUpdatedaysInput } from './availability-updatedays.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ScheduleUpdateOneWithoutAvailabilityNestedInput } from '../schedule/schedule-update-one-without-availability-nested.input';

@InputType()
export class AvailabilityUpdateWithoutUserInput {

    @Field(() => EventTypeUpdateOneWithoutAvailabilityNestedInput, {nullable:true})
    eventType?: EventTypeUpdateOneWithoutAvailabilityNestedInput;

    @Field(() => AvailabilityUpdatedaysInput, {nullable:true})
    days?: AvailabilityUpdatedaysInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    startTime?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    endTime?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => ScheduleUpdateOneWithoutAvailabilityNestedInput, {nullable:true})
    Schedule?: ScheduleUpdateOneWithoutAvailabilityNestedInput;
}
