import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateWithoutAvailabilityInput } from './event-type-create-without-availability.input';
import { Type } from 'class-transformer';
import { EventTypeCreateOrConnectWithoutAvailabilityInput } from './event-type-create-or-connect-without-availability.input';
import { EventTypeUpsertWithoutAvailabilityInput } from './event-type-upsert-without-availability.input';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { EventTypeUpdateWithoutAvailabilityInput } from './event-type-update-without-availability.input';

@InputType()
export class EventTypeUpdateOneWithoutAvailabilityNestedInput {

    @Field(() => EventTypeCreateWithoutAvailabilityInput, {nullable:true})
    @Type(() => EventTypeCreateWithoutAvailabilityInput)
    create?: EventTypeCreateWithoutAvailabilityInput;

    @Field(() => EventTypeCreateOrConnectWithoutAvailabilityInput, {nullable:true})
    @Type(() => EventTypeCreateOrConnectWithoutAvailabilityInput)
    connectOrCreate?: EventTypeCreateOrConnectWithoutAvailabilityInput;

    @Field(() => EventTypeUpsertWithoutAvailabilityInput, {nullable:true})
    @Type(() => EventTypeUpsertWithoutAvailabilityInput)
    upsert?: EventTypeUpsertWithoutAvailabilityInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => EventTypeWhereUniqueInput, {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    connect?: EventTypeWhereUniqueInput;

    @Field(() => EventTypeUpdateWithoutAvailabilityInput, {nullable:true})
    @Type(() => EventTypeUpdateWithoutAvailabilityInput)
    update?: EventTypeUpdateWithoutAvailabilityInput;
}
