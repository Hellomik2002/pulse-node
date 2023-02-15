import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { Type } from 'class-transformer';
import { BookingCreateWithoutPaymentInput } from './booking-create-without-payment.input';

@InputType()
export class BookingCreateOrConnectWithoutPaymentInput {

    @Field(() => BookingWhereUniqueInput, {nullable:false})
    @Type(() => BookingWhereUniqueInput)
    where!: BookingWhereUniqueInput;

    @Field(() => BookingCreateWithoutPaymentInput, {nullable:false})
    @Type(() => BookingCreateWithoutPaymentInput)
    create!: BookingCreateWithoutPaymentInput;
}
