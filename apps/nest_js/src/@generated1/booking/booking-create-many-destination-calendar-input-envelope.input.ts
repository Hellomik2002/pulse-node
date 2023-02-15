import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateManyDestinationCalendarInput } from './booking-create-many-destination-calendar.input';
import { Type } from 'class-transformer';

@InputType()
export class BookingCreateManyDestinationCalendarInputEnvelope {

    @Field(() => [BookingCreateManyDestinationCalendarInput], {nullable:false})
    @Type(() => BookingCreateManyDestinationCalendarInput)
    data!: Array<BookingCreateManyDestinationCalendarInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
