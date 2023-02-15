import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { Type } from 'class-transformer';
import { EventTypeCreateWithoutCustomInputsInput } from './event-type-create-without-custom-inputs.input';

@InputType()
export class EventTypeCreateOrConnectWithoutCustomInputsInput {

    @Field(() => EventTypeWhereUniqueInput, {nullable:false})
    @Type(() => EventTypeWhereUniqueInput)
    where!: EventTypeWhereUniqueInput;

    @Field(() => EventTypeCreateWithoutCustomInputsInput, {nullable:false})
    @Type(() => EventTypeCreateWithoutCustomInputsInput)
    create!: EventTypeCreateWithoutCustomInputsInput;
}
