import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCustomInputType } from './event-type-custom-input-type.enum';

@InputType()
export class EnumEventTypeCustomInputTypeFieldUpdateOperationsInput {

    @Field(() => EventTypeCustomInputType, {nullable:true})
    set?: keyof typeof EventTypeCustomInputType;
}
