import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateWithoutBookingsInput } from './event-type-create-without-bookings.input';
import { Type } from 'class-transformer';
import { EventTypeCreateOrConnectWithoutBookingsInput } from './event-type-create-or-connect-without-bookings.input';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';

@InputType()
export class EventTypeCreateNestedOneWithoutBookingsInput {

    @Field(() => EventTypeCreateWithoutBookingsInput, {nullable:true})
    @Type(() => EventTypeCreateWithoutBookingsInput)
    create?: EventTypeCreateWithoutBookingsInput;

    @Field(() => EventTypeCreateOrConnectWithoutBookingsInput, {nullable:true})
    @Type(() => EventTypeCreateOrConnectWithoutBookingsInput)
    connectOrCreate?: EventTypeCreateOrConnectWithoutBookingsInput;

    @Field(() => EventTypeWhereUniqueInput, {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    connect?: EventTypeWhereUniqueInput;
}
