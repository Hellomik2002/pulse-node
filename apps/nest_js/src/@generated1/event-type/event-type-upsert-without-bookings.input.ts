import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeUpdateWithoutBookingsInput } from './event-type-update-without-bookings.input';
import { Type } from 'class-transformer';
import { EventTypeCreateWithoutBookingsInput } from './event-type-create-without-bookings.input';

@InputType()
export class EventTypeUpsertWithoutBookingsInput {

    @Field(() => EventTypeUpdateWithoutBookingsInput, {nullable:false})
    @Type(() => EventTypeUpdateWithoutBookingsInput)
    update!: EventTypeUpdateWithoutBookingsInput;

    @Field(() => EventTypeCreateWithoutBookingsInput, {nullable:false})
    @Type(() => EventTypeCreateWithoutBookingsInput)
    create!: EventTypeCreateWithoutBookingsInput;
}
