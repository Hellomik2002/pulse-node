import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingUpdateWithoutPaymentInput } from './booking-update-without-payment.input';
import { Type } from 'class-transformer';
import { BookingCreateWithoutPaymentInput } from './booking-create-without-payment.input';

@InputType()
export class BookingUpsertWithoutPaymentInput {

    @Field(() => BookingUpdateWithoutPaymentInput, {nullable:false})
    @Type(() => BookingUpdateWithoutPaymentInput)
    update!: BookingUpdateWithoutPaymentInput;

    @Field(() => BookingCreateWithoutPaymentInput, {nullable:false})
    @Type(() => BookingCreateWithoutPaymentInput)
    create!: BookingCreateWithoutPaymentInput;
}
