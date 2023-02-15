import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeUpdateWithoutDestinationCalendarInput } from './event-type-update-without-destination-calendar.input';
import { Type } from 'class-transformer';
import { EventTypeCreateWithoutDestinationCalendarInput } from './event-type-create-without-destination-calendar.input';

@InputType()
export class EventTypeUpsertWithoutDestinationCalendarInput {

    @Field(() => EventTypeUpdateWithoutDestinationCalendarInput, {nullable:false})
    @Type(() => EventTypeUpdateWithoutDestinationCalendarInput)
    update!: EventTypeUpdateWithoutDestinationCalendarInput;

    @Field(() => EventTypeCreateWithoutDestinationCalendarInput, {nullable:false})
    @Type(() => EventTypeCreateWithoutDestinationCalendarInput)
    create!: EventTypeCreateWithoutDestinationCalendarInput;
}
