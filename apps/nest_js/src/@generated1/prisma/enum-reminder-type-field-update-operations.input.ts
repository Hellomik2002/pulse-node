import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReminderType } from './reminder-type.enum';

@InputType()
export class EnumReminderTypeFieldUpdateOperationsInput {

    @Field(() => ReminderType, {nullable:true})
    set?: keyof typeof ReminderType;
}
