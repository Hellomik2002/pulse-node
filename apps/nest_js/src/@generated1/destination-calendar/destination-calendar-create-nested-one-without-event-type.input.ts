import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DestinationCalendarCreateWithoutEventTypeInput } from './destination-calendar-create-without-event-type.input';
import { Type } from 'class-transformer';
import { DestinationCalendarCreateOrConnectWithoutEventTypeInput } from './destination-calendar-create-or-connect-without-event-type.input';
import { DestinationCalendarWhereUniqueInput } from './destination-calendar-where-unique.input';

@InputType()
export class DestinationCalendarCreateNestedOneWithoutEventTypeInput {

    @Field(() => DestinationCalendarCreateWithoutEventTypeInput, {nullable:true})
    @Type(() => DestinationCalendarCreateWithoutEventTypeInput)
    create?: DestinationCalendarCreateWithoutEventTypeInput;

    @Field(() => DestinationCalendarCreateOrConnectWithoutEventTypeInput, {nullable:true})
    @Type(() => DestinationCalendarCreateOrConnectWithoutEventTypeInput)
    connectOrCreate?: DestinationCalendarCreateOrConnectWithoutEventTypeInput;

    @Field(() => DestinationCalendarWhereUniqueInput, {nullable:true})
    @Type(() => DestinationCalendarWhereUniqueInput)
    connect?: DestinationCalendarWhereUniqueInput;
}
