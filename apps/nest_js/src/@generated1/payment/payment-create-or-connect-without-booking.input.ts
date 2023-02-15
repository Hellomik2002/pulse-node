import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';
import { Type } from 'class-transformer';
import { PaymentCreateWithoutBookingInput } from './payment-create-without-booking.input';

@InputType()
export class PaymentCreateOrConnectWithoutBookingInput {

    @Field(() => PaymentWhereUniqueInput, {nullable:false})
    @Type(() => PaymentWhereUniqueInput)
    where!: PaymentWhereUniqueInput;

    @Field(() => PaymentCreateWithoutBookingInput, {nullable:false})
    @Type(() => PaymentCreateWithoutBookingInput)
    create!: PaymentCreateWithoutBookingInput;
}
