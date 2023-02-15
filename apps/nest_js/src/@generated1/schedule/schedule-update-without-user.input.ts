import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeUpdateManyWithoutScheduleNestedInput } from '../event-type/event-type-update-many-without-schedule-nested.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { AvailabilityUpdateManyWithoutScheduleNestedInput } from '../availability/availability-update-many-without-schedule-nested.input';

@InputType()
export class ScheduleUpdateWithoutUserInput {

    @Field(() => EventTypeUpdateManyWithoutScheduleNestedInput, {nullable:true})
    eventType?: EventTypeUpdateManyWithoutScheduleNestedInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    timeZone?: NullableStringFieldUpdateOperationsInput;

    @Field(() => AvailabilityUpdateManyWithoutScheduleNestedInput, {nullable:true})
    availability?: AvailabilityUpdateManyWithoutScheduleNestedInput;
}
