import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeUpdateWithoutCustomInputsInput } from './event-type-update-without-custom-inputs.input';
import { Type } from 'class-transformer';
import { EventTypeCreateWithoutCustomInputsInput } from './event-type-create-without-custom-inputs.input';

@InputType()
export class EventTypeUpsertWithoutCustomInputsInput {

    @Field(() => EventTypeUpdateWithoutCustomInputsInput, {nullable:false})
    @Type(() => EventTypeUpdateWithoutCustomInputsInput)
    update!: EventTypeUpdateWithoutCustomInputsInput;

    @Field(() => EventTypeCreateWithoutCustomInputsInput, {nullable:false})
    @Type(() => EventTypeCreateWithoutCustomInputsInput)
    create!: EventTypeCreateWithoutCustomInputsInput;
}
