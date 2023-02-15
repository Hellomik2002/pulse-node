import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateWithoutBookingsInput } from './event-type-create-without-bookings.input';
import { Type } from 'class-transformer';
import { EventTypeCreateOrConnectWithoutBookingsInput } from './event-type-create-or-connect-without-bookings.input';
import { EventTypeUpsertWithoutBookingsInput } from './event-type-upsert-without-bookings.input';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { EventTypeUpdateWithoutBookingsInput } from './event-type-update-without-bookings.input';

@InputType()
export class EventTypeUpdateOneWithoutBookingsNestedInput {

    @Field(() => EventTypeCreateWithoutBookingsInput, {nullable:true})
    @Type(() => EventTypeCreateWithoutBookingsInput)
    create?: EventTypeCreateWithoutBookingsInput;

    @Field(() => EventTypeCreateOrConnectWithoutBookingsInput, {nullable:true})
    @Type(() => EventTypeCreateOrConnectWithoutBookingsInput)
    connectOrCreate?: EventTypeCreateOrConnectWithoutBookingsInput;

    @Field(() => EventTypeUpsertWithoutBookingsInput, {nullable:true})
    @Type(() => EventTypeUpsertWithoutBookingsInput)
    upsert?: EventTypeUpsertWithoutBookingsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => EventTypeWhereUniqueInput, {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    connect?: EventTypeWhereUniqueInput;

    @Field(() => EventTypeUpdateWithoutBookingsInput, {nullable:true})
    @Type(() => EventTypeUpdateWithoutBookingsInput)
    update?: EventTypeUpdateWithoutBookingsInput;
}
