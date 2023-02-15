import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateWithoutDestinationCalendarInput } from './event-type-create-without-destination-calendar.input';
import { Type } from 'class-transformer';
import { EventTypeCreateOrConnectWithoutDestinationCalendarInput } from './event-type-create-or-connect-without-destination-calendar.input';
import { EventTypeUpsertWithoutDestinationCalendarInput } from './event-type-upsert-without-destination-calendar.input';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { EventTypeUpdateWithoutDestinationCalendarInput } from './event-type-update-without-destination-calendar.input';

@InputType()
export class EventTypeUpdateOneWithoutDestinationCalendarNestedInput {

    @Field(() => EventTypeCreateWithoutDestinationCalendarInput, {nullable:true})
    @Type(() => EventTypeCreateWithoutDestinationCalendarInput)
    create?: EventTypeCreateWithoutDestinationCalendarInput;

    @Field(() => EventTypeCreateOrConnectWithoutDestinationCalendarInput, {nullable:true})
    @Type(() => EventTypeCreateOrConnectWithoutDestinationCalendarInput)
    connectOrCreate?: EventTypeCreateOrConnectWithoutDestinationCalendarInput;

    @Field(() => EventTypeUpsertWithoutDestinationCalendarInput, {nullable:true})
    @Type(() => EventTypeUpsertWithoutDestinationCalendarInput)
    upsert?: EventTypeUpsertWithoutDestinationCalendarInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => EventTypeWhereUniqueInput, {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    connect?: EventTypeWhereUniqueInput;

    @Field(() => EventTypeUpdateWithoutDestinationCalendarInput, {nullable:true})
    @Type(() => EventTypeUpdateWithoutDestinationCalendarInput)
    update?: EventTypeUpdateWithoutDestinationCalendarInput;
}
