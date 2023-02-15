import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentType } from '../prisma/payment-type.enum';
import { BookingCreateNestedOneWithoutPaymentInput } from '../booking/booking-create-nested-one-without-payment.input';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class PaymentCreateInput {

    @Field(() => String, {nullable:false})
    uid!: string;

    @Field(() => PaymentType, {nullable:false})
    type!: keyof typeof PaymentType;

    @Field(() => BookingCreateNestedOneWithoutPaymentInput, {nullable:true})
    booking?: BookingCreateNestedOneWithoutPaymentInput;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    fee!: number;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => Boolean, {nullable:false})
    success!: boolean;

    @Field(() => Boolean, {nullable:false})
    refunded!: boolean;

    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;

    @Field(() => String, {nullable:false})
    externalId!: string;
}
