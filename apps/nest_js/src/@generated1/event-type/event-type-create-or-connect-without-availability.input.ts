import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { Type } from 'class-transformer';
import { EventTypeCreateWithoutAvailabilityInput } from './event-type-create-without-availability.input';

@InputType()
export class EventTypeCreateOrConnectWithoutAvailabilityInput {

    @Field(() => EventTypeWhereUniqueInput, {nullable:false})
    @Type(() => EventTypeWhereUniqueInput)
    where!: EventTypeWhereUniqueInput;

    @Field(() => EventTypeCreateWithoutAvailabilityInput, {nullable:false})
    @Type(() => EventTypeCreateWithoutAvailabilityInput)
    create!: EventTypeCreateWithoutAvailabilityInput;
}
