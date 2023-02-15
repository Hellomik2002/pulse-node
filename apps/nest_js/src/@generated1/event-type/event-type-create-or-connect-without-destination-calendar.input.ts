import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { Type } from 'class-transformer';
import { EventTypeCreateWithoutDestinationCalendarInput } from './event-type-create-without-destination-calendar.input';

@InputType()
export class EventTypeCreateOrConnectWithoutDestinationCalendarInput {

    @Field(() => EventTypeWhereUniqueInput, {nullable:false})
    @Type(() => EventTypeWhereUniqueInput)
    where!: EventTypeWhereUniqueInput;

    @Field(() => EventTypeCreateWithoutDestinationCalendarInput, {nullable:false})
    @Type(() => EventTypeCreateWithoutDestinationCalendarInput)
    create!: EventTypeCreateWithoutDestinationCalendarInput;
}
