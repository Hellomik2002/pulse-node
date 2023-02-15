import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateWithoutAvailabilityInput } from './event-type-create-without-availability.input';
import { Type } from 'class-transformer';
import { EventTypeCreateOrConnectWithoutAvailabilityInput } from './event-type-create-or-connect-without-availability.input';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';

@InputType()
export class EventTypeCreateNestedOneWithoutAvailabilityInput {

    @Field(() => EventTypeCreateWithoutAvailabilityInput, {nullable:true})
    @Type(() => EventTypeCreateWithoutAvailabilityInput)
    create?: EventTypeCreateWithoutAvailabilityInput;

    @Field(() => EventTypeCreateOrConnectWithoutAvailabilityInput, {nullable:true})
    @Type(() => EventTypeCreateOrConnectWithoutAvailabilityInput)
    connectOrCreate?: EventTypeCreateOrConnectWithoutAvailabilityInput;

    @Field(() => EventTypeWhereUniqueInput, {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    connect?: EventTypeWhereUniqueInput;
}
