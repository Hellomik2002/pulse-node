import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutDestinationCalendarInput } from './booking-create-without-destination-calendar.input';
import { Type } from 'class-transformer';
import { BookingCreateOrConnectWithoutDestinationCalendarInput } from './booking-create-or-connect-without-destination-calendar.input';
import { BookingCreateManyDestinationCalendarInputEnvelope } from './booking-create-many-destination-calendar-input-envelope.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';

@InputType()
export class BookingUncheckedCreateNestedManyWithoutDestinationCalendarInput {

    @Field(() => [BookingCreateWithoutDestinationCalendarInput], {nullable:true})
    @Type(() => BookingCreateWithoutDestinationCalendarInput)
    create?: Array<BookingCreateWithoutDestinationCalendarInput>;

    @Field(() => [BookingCreateOrConnectWithoutDestinationCalendarInput], {nullable:true})
    @Type(() => BookingCreateOrConnectWithoutDestinationCalendarInput)
    connectOrCreate?: Array<BookingCreateOrConnectWithoutDestinationCalendarInput>;

    @Field(() => BookingCreateManyDestinationCalendarInputEnvelope, {nullable:true})
    @Type(() => BookingCreateManyDestinationCalendarInputEnvelope)
    createMany?: BookingCreateManyDestinationCalendarInputEnvelope;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    @Type(() => BookingWhereUniqueInput)
    connect?: Array<BookingWhereUniqueInput>;
}
