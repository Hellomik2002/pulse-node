import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeUpdateWithoutAvailabilityInput } from './event-type-update-without-availability.input';
import { Type } from 'class-transformer';
import { EventTypeCreateWithoutAvailabilityInput } from './event-type-create-without-availability.input';

@InputType()
export class EventTypeUpsertWithoutAvailabilityInput {

    @Field(() => EventTypeUpdateWithoutAvailabilityInput, {nullable:false})
    @Type(() => EventTypeUpdateWithoutAvailabilityInput)
    update!: EventTypeUpdateWithoutAvailabilityInput;

    @Field(() => EventTypeCreateWithoutAvailabilityInput, {nullable:false})
    @Type(() => EventTypeCreateWithoutAvailabilityInput)
    create!: EventTypeCreateWithoutAvailabilityInput;
}
