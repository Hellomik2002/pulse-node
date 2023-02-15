import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutSelectedCalendarsNestedInput } from '../user/user-update-one-required-without-selected-calendars-nested.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class SelectedCalendarUpdateInput {

    @Field(() => UserUpdateOneRequiredWithoutSelectedCalendarsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutSelectedCalendarsNestedInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    integration?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    externalId?: StringFieldUpdateOperationsInput;
}
