import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { AvailabilityUncheckedUpdateManyWithoutScheduleNestedInput } from '../availability/availability-unchecked-update-many-without-schedule-nested.input';

@InputType()
export class ScheduleUncheckedUpdateWithoutEventTypeInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    userId?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    timeZone?: NullableStringFieldUpdateOperationsInput;

    @Field(() => AvailabilityUncheckedUpdateManyWithoutScheduleNestedInput, {nullable:true})
    availability?: AvailabilityUncheckedUpdateManyWithoutScheduleNestedInput;
}
