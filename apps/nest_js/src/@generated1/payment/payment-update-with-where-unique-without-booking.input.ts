import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';
import { Type } from 'class-transformer';
import { PaymentUpdateWithoutBookingInput } from './payment-update-without-booking.input';

@InputType()
export class PaymentUpdateWithWhereUniqueWithoutBookingInput {

    @Field(() => PaymentWhereUniqueInput, {nullable:false})
    @Type(() => PaymentWhereUniqueInput)
    where!: PaymentWhereUniqueInput;

    @Field(() => PaymentUpdateWithoutBookingInput, {nullable:false})
    @Type(() => PaymentUpdateWithoutBookingInput)
    data!: PaymentUpdateWithoutBookingInput;
}
