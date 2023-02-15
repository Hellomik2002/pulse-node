import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentCreateWithoutBookingInput } from './payment-create-without-booking.input';
import { Type } from 'class-transformer';
import { PaymentCreateOrConnectWithoutBookingInput } from './payment-create-or-connect-without-booking.input';
import { PaymentUpsertWithWhereUniqueWithoutBookingInput } from './payment-upsert-with-where-unique-without-booking.input';
import { PaymentCreateManyBookingInputEnvelope } from './payment-create-many-booking-input-envelope.input';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';
import { PaymentUpdateWithWhereUniqueWithoutBookingInput } from './payment-update-with-where-unique-without-booking.input';
import { PaymentUpdateManyWithWhereWithoutBookingInput } from './payment-update-many-with-where-without-booking.input';
import { PaymentScalarWhereInput } from './payment-scalar-where.input';

@InputType()
export class PaymentUpdateManyWithoutBookingNestedInput {

    @Field(() => [PaymentCreateWithoutBookingInput], {nullable:true})
    @Type(() => PaymentCreateWithoutBookingInput)
    create?: Array<PaymentCreateWithoutBookingInput>;

    @Field(() => [PaymentCreateOrConnectWithoutBookingInput], {nullable:true})
    @Type(() => PaymentCreateOrConnectWithoutBookingInput)
    connectOrCreate?: Array<PaymentCreateOrConnectWithoutBookingInput>;

    @Field(() => [PaymentUpsertWithWhereUniqueWithoutBookingInput], {nullable:true})
    @Type(() => PaymentUpsertWithWhereUniqueWithoutBookingInput)
    upsert?: Array<PaymentUpsertWithWhereUniqueWithoutBookingInput>;

    @Field(() => PaymentCreateManyBookingInputEnvelope, {nullable:true})
    @Type(() => PaymentCreateManyBookingInputEnvelope)
    createMany?: PaymentCreateManyBookingInputEnvelope;

    @Field(() => [PaymentWhereUniqueInput], {nullable:true})
    @Type(() => PaymentWhereUniqueInput)
    set?: Array<PaymentWhereUniqueInput>;

    @Field(() => [PaymentWhereUniqueInput], {nullable:true})
    @Type(() => PaymentWhereUniqueInput)
    disconnect?: Array<PaymentWhereUniqueInput>;

    @Field(() => [PaymentWhereUniqueInput], {nullable:true})
    @Type(() => PaymentWhereUniqueInput)
    delete?: Array<PaymentWhereUniqueInput>;

    @Field(() => [PaymentWhereUniqueInput], {nullable:true})
    @Type(() => PaymentWhereUniqueInput)
    connect?: Array<PaymentWhereUniqueInput>;

    @Field(() => [PaymentUpdateWithWhereUniqueWithoutBookingInput], {nullable:true})
    @Type(() => PaymentUpdateWithWhereUniqueWithoutBookingInput)
    update?: Array<PaymentUpdateWithWhereUniqueWithoutBookingInput>;

    @Field(() => [PaymentUpdateManyWithWhereWithoutBookingInput], {nullable:true})
    @Type(() => PaymentUpdateManyWithWhereWithoutBookingInput)
    updateMany?: Array<PaymentUpdateManyWithWhereWithoutBookingInput>;

    @Field(() => [PaymentScalarWhereInput], {nullable:true})
    @Type(() => PaymentScalarWhereInput)
    deleteMany?: Array<PaymentScalarWhereInput>;
}
