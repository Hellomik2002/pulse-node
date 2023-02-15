import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';
import { Type } from 'class-transformer';
import { PaymentUpdateWithoutBookingInput } from './payment-update-without-booking.input';
import { PaymentCreateWithoutBookingInput } from './payment-create-without-booking.input';

@InputType()
export class PaymentUpsertWithWhereUniqueWithoutBookingInput {

    @Field(() => PaymentWhereUniqueInput, {nullable:false})
    @Type(() => PaymentWhereUniqueInput)
    where!: PaymentWhereUniqueInput;

    @Field(() => PaymentUpdateWithoutBookingInput, {nullable:false})
    @Type(() => PaymentUpdateWithoutBookingInput)
    update!: PaymentUpdateWithoutBookingInput;

    @Field(() => PaymentCreateWithoutBookingInput, {nullable:false})
    @Type(() => PaymentCreateWithoutBookingInput)
    create!: PaymentCreateWithoutBookingInput;
}
