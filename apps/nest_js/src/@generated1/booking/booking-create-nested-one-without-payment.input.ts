import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutPaymentInput } from './booking-create-without-payment.input';
import { Type } from 'class-transformer';
import { BookingCreateOrConnectWithoutPaymentInput } from './booking-create-or-connect-without-payment.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';

@InputType()
export class BookingCreateNestedOneWithoutPaymentInput {

    @Field(() => BookingCreateWithoutPaymentInput, {nullable:true})
    @Type(() => BookingCreateWithoutPaymentInput)
    create?: BookingCreateWithoutPaymentInput;

    @Field(() => BookingCreateOrConnectWithoutPaymentInput, {nullable:true})
    @Type(() => BookingCreateOrConnectWithoutPaymentInput)
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentInput;

    @Field(() => BookingWhereUniqueInput, {nullable:true})
    @Type(() => BookingWhereUniqueInput)
    connect?: BookingWhereUniqueInput;
}
