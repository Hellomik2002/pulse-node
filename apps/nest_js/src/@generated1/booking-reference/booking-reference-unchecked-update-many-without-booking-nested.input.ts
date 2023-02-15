import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingReferenceCreateWithoutBookingInput } from './booking-reference-create-without-booking.input';
import { Type } from 'class-transformer';
import { BookingReferenceCreateOrConnectWithoutBookingInput } from './booking-reference-create-or-connect-without-booking.input';
import { BookingReferenceUpsertWithWhereUniqueWithoutBookingInput } from './booking-reference-upsert-with-where-unique-without-booking.input';
import { BookingReferenceCreateManyBookingInputEnvelope } from './booking-reference-create-many-booking-input-envelope.input';
import { BookingReferenceWhereUniqueInput } from './booking-reference-where-unique.input';
import { BookingReferenceUpdateWithWhereUniqueWithoutBookingInput } from './booking-reference-update-with-where-unique-without-booking.input';
import { BookingReferenceUpdateManyWithWhereWithoutBookingInput } from './booking-reference-update-many-with-where-without-booking.input';
import { BookingReferenceScalarWhereInput } from './booking-reference-scalar-where.input';

@InputType()
export class BookingReferenceUncheckedUpdateManyWithoutBookingNestedInput {

    @Field(() => [BookingReferenceCreateWithoutBookingInput], {nullable:true})
    @Type(() => BookingReferenceCreateWithoutBookingInput)
    create?: Array<BookingReferenceCreateWithoutBookingInput>;

    @Field(() => [BookingReferenceCreateOrConnectWithoutBookingInput], {nullable:true})
    @Type(() => BookingReferenceCreateOrConnectWithoutBookingInput)
    connectOrCreate?: Array<BookingReferenceCreateOrConnectWithoutBookingInput>;

    @Field(() => [BookingReferenceUpsertWithWhereUniqueWithoutBookingInput], {nullable:true})
    @Type(() => BookingReferenceUpsertWithWhereUniqueWithoutBookingInput)
    upsert?: Array<BookingReferenceUpsertWithWhereUniqueWithoutBookingInput>;

    @Field(() => BookingReferenceCreateManyBookingInputEnvelope, {nullable:true})
    @Type(() => BookingReferenceCreateManyBookingInputEnvelope)
    createMany?: BookingReferenceCreateManyBookingInputEnvelope;

    @Field(() => [BookingReferenceWhereUniqueInput], {nullable:true})
    @Type(() => BookingReferenceWhereUniqueInput)
    set?: Array<BookingReferenceWhereUniqueInput>;

    @Field(() => [BookingReferenceWhereUniqueInput], {nullable:true})
    @Type(() => BookingReferenceWhereUniqueInput)
    disconnect?: Array<BookingReferenceWhereUniqueInput>;

    @Field(() => [BookingReferenceWhereUniqueInput], {nullable:true})
    @Type(() => BookingReferenceWhereUniqueInput)
    delete?: Array<BookingReferenceWhereUniqueInput>;

    @Field(() => [BookingReferenceWhereUniqueInput], {nullable:true})
    @Type(() => BookingReferenceWhereUniqueInput)
    connect?: Array<BookingReferenceWhereUniqueInput>;

    @Field(() => [BookingReferenceUpdateWithWhereUniqueWithoutBookingInput], {nullable:true})
    @Type(() => BookingReferenceUpdateWithWhereUniqueWithoutBookingInput)
    update?: Array<BookingReferenceUpdateWithWhereUniqueWithoutBookingInput>;

    @Field(() => [BookingReferenceUpdateManyWithWhereWithoutBookingInput], {nullable:true})
    @Type(() => BookingReferenceUpdateManyWithWhereWithoutBookingInput)
    updateMany?: Array<BookingReferenceUpdateManyWithWhereWithoutBookingInput>;

    @Field(() => [BookingReferenceScalarWhereInput], {nullable:true})
    @Type(() => BookingReferenceScalarWhereInput)
    deleteMany?: Array<BookingReferenceScalarWhereInput>;
}
