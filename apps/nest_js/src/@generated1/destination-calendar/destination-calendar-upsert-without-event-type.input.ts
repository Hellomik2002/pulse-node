import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DestinationCalendarUpdateWithoutEventTypeInput } from './destination-calendar-update-without-event-type.input';
import { Type } from 'class-transformer';
import { DestinationCalendarCreateWithoutEventTypeInput } from './destination-calendar-create-without-event-type.input';

@InputType()
export class DestinationCalendarUpsertWithoutEventTypeInput {

    @Field(() => DestinationCalendarUpdateWithoutEventTypeInput, {nullable:false})
    @Type(() => DestinationCalendarUpdateWithoutEventTypeInput)
    update!: DestinationCalendarUpdateWithoutEventTypeInput;

    @Field(() => DestinationCalendarCreateWithoutEventTypeInput, {nullable:false})
    @Type(() => DestinationCalendarCreateWithoutEventTypeInput)
    create!: DestinationCalendarCreateWithoutEventTypeInput;
}
