import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutDestinationCalendarInput } from './booking-create-without-destination-calendar.input';
import { Type } from 'class-transformer';
import { BookingCreateOrConnectWithoutDestinationCalendarInput } from './booking-create-or-connect-without-destination-calendar.input';
import { BookingUpsertWithWhereUniqueWithoutDestinationCalendarInput } from './booking-upsert-with-where-unique-without-destination-calendar.input';
import { BookingCreateManyDestinationCalendarInputEnvelope } from './booking-create-many-destination-calendar-input-envelope.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingUpdateWithWhereUniqueWithoutDestinationCalendarInput } from './booking-update-with-where-unique-without-destination-calendar.input';
import { BookingUpdateManyWithWhereWithoutDestinationCalendarInput } from './booking-update-many-with-where-without-destination-calendar.input';
import { BookingScalarWhereInput } from './booking-scalar-where.input';

@InputType()
export class BookingUpdateManyWithoutDestinationCalendarNestedInput {

    @Field(() => [BookingCreateWithoutDestinationCalendarInput], {nullable:true})
    @Type(() => BookingCreateWithoutDestinationCalendarInput)
    create?: Array<BookingCreateWithoutDestinationCalendarInput>;

    @Field(() => [BookingCreateOrConnectWithoutDestinationCalendarInput], {nullable:true})
    @Type(() => BookingCreateOrConnectWithoutDestinationCalendarInput)
    connectOrCreate?: Array<BookingCreateOrConnectWithoutDestinationCalendarInput>;

    @Field(() => [BookingUpsertWithWhereUniqueWithoutDestinationCalendarInput], {nullable:true})
    @Type(() => BookingUpsertWithWhereUniqueWithoutDestinationCalendarInput)
    upsert?: Array<BookingUpsertWithWhereUniqueWithoutDestinationCalendarInput>;

    @Field(() => BookingCreateManyDestinationCalendarInputEnvelope, {nullable:true})
    @Type(() => BookingCreateManyDestinationCalendarInputEnvelope)
    createMany?: BookingCreateManyDestinationCalendarInputEnvelope;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    @Type(() => BookingWhereUniqueInput)
    set?: Array<BookingWhereUniqueInput>;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    @Type(() => BookingWhereUniqueInput)
    disconnect?: Array<BookingWhereUniqueInput>;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    @Type(() => BookingWhereUniqueInput)
    delete?: Array<BookingWhereUniqueInput>;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    @Type(() => BookingWhereUniqueInput)
    connect?: Array<BookingWhereUniqueInput>;

    @Field(() => [BookingUpdateWithWhereUniqueWithoutDestinationCalendarInput], {nullable:true})
    @Type(() => BookingUpdateWithWhereUniqueWithoutDestinationCalendarInput)
    update?: Array<BookingUpdateWithWhereUniqueWithoutDestinationCalendarInput>;

    @Field(() => [BookingUpdateManyWithWhereWithoutDestinationCalendarInput], {nullable:true})
    @Type(() => BookingUpdateManyWithWhereWithoutDestinationCalendarInput)
    updateMany?: Array<BookingUpdateManyWithWhereWithoutDestinationCalendarInput>;

    @Field(() => [BookingScalarWhereInput], {nullable:true})
    @Type(() => BookingScalarWhereInput)
    deleteMany?: Array<BookingScalarWhereInput>;
}
