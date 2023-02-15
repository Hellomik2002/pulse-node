import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentCreateWithoutBookingInput } from './payment-create-without-booking.input';
import { Type } from 'class-transformer';
import { PaymentCreateOrConnectWithoutBookingInput } from './payment-create-or-connect-without-booking.input';
import { PaymentCreateManyBookingInputEnvelope } from './payment-create-many-booking-input-envelope.input';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';

@InputType()
export class PaymentUncheckedCreateNestedManyWithoutBookingInput {

    @Field(() => [PaymentCreateWithoutBookingInput], {nullable:true})
    @Type(() => PaymentCreateWithoutBookingInput)
    create?: Array<PaymentCreateWithoutBookingInput>;

    @Field(() => [PaymentCreateOrConnectWithoutBookingInput], {nullable:true})
    @Type(() => PaymentCreateOrConnectWithoutBookingInput)
    connectOrCreate?: Array<PaymentCreateOrConnectWithoutBookingInput>;

    @Field(() => PaymentCreateManyBookingInputEnvelope, {nullable:true})
    @Type(() => PaymentCreateManyBookingInputEnvelope)
    createMany?: PaymentCreateManyBookingInputEnvelope;

    @Field(() => [PaymentWhereUniqueInput], {nullable:true})
    @Type(() => PaymentWhereUniqueInput)
    connect?: Array<PaymentWhereUniqueInput>;
}
