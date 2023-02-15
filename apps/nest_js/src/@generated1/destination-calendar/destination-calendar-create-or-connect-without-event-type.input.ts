import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DestinationCalendarWhereUniqueInput } from './destination-calendar-where-unique.input';
import { Type } from 'class-transformer';
import { DestinationCalendarCreateWithoutEventTypeInput } from './destination-calendar-create-without-event-type.input';

@InputType()
export class DestinationCalendarCreateOrConnectWithoutEventTypeInput {

    @Field(() => DestinationCalendarWhereUniqueInput, {nullable:false})
    @Type(() => DestinationCalendarWhereUniqueInput)
    where!: DestinationCalendarWhereUniqueInput;

    @Field(() => DestinationCalendarCreateWithoutEventTypeInput, {nullable:false})
    @Type(() => DestinationCalendarCreateWithoutEventTypeInput)
    create!: DestinationCalendarCreateWithoutEventTypeInput;
}
