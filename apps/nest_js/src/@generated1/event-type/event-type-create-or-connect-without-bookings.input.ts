import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { Type } from 'class-transformer';
import { EventTypeCreateWithoutBookingsInput } from './event-type-create-without-bookings.input';

@InputType()
export class EventTypeCreateOrConnectWithoutBookingsInput {

    @Field(() => EventTypeWhereUniqueInput, {nullable:false})
    @Type(() => EventTypeWhereUniqueInput)
    where!: EventTypeWhereUniqueInput;

    @Field(() => EventTypeCreateWithoutBookingsInput, {nullable:false})
    @Type(() => EventTypeCreateWithoutBookingsInput)
    create!: EventTypeCreateWithoutBookingsInput;
}
