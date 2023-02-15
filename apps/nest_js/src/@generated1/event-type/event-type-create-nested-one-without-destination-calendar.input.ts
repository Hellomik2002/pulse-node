import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateWithoutDestinationCalendarInput } from './event-type-create-without-destination-calendar.input';
import { Type } from 'class-transformer';
import { EventTypeCreateOrConnectWithoutDestinationCalendarInput } from './event-type-create-or-connect-without-destination-calendar.input';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';

@InputType()
export class EventTypeCreateNestedOneWithoutDestinationCalendarInput {

    @Field(() => EventTypeCreateWithoutDestinationCalendarInput, {nullable:true})
    @Type(() => EventTypeCreateWithoutDestinationCalendarInput)
    create?: EventTypeCreateWithoutDestinationCalendarInput;

    @Field(() => EventTypeCreateOrConnectWithoutDestinationCalendarInput, {nullable:true})
    @Type(() => EventTypeCreateOrConnectWithoutDestinationCalendarInput)
    connectOrCreate?: EventTypeCreateOrConnectWithoutDestinationCalendarInput;

    @Field(() => EventTypeWhereUniqueInput, {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    connect?: EventTypeWhereUniqueInput;
}
