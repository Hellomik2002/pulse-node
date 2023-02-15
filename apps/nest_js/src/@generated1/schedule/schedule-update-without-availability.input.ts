import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutSchedulesNestedInput } from '../user/user-update-one-required-without-schedules-nested.input';
import { EventTypeUpdateManyWithoutScheduleNestedInput } from '../event-type/event-type-update-many-without-schedule-nested.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';

@InputType()
export class ScheduleUpdateWithoutAvailabilityInput {

    @Field(() => UserUpdateOneRequiredWithoutSchedulesNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutSchedulesNestedInput;

    @Field(() => EventTypeUpdateManyWithoutScheduleNestedInput, {nullable:true})
    eventType?: EventTypeUpdateManyWithoutScheduleNestedInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    timeZone?: NullableStringFieldUpdateOperationsInput;
}
