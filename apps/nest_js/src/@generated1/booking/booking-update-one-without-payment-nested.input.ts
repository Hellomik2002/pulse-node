import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutPaymentInput } from './booking-create-without-payment.input';
import { Type } from 'class-transformer';
import { BookingCreateOrConnectWithoutPaymentInput } from './booking-create-or-connect-without-payment.input';
import { BookingUpsertWithoutPaymentInput } from './booking-upsert-without-payment.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingUpdateWithoutPaymentInput } from './booking-update-without-payment.input';

@InputType()
export class BookingUpdateOneWithoutPaymentNestedInput {

    @Field(() => BookingCreateWithoutPaymentInput, {nullable:true})
    @Type(() => BookingCreateWithoutPaymentInput)
    create?: BookingCreateWithoutPaymentInput;

    @Field(() => BookingCreateOrConnectWithoutPaymentInput, {nullable:true})
    @Type(() => BookingCreateOrConnectWithoutPaymentInput)
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentInput;

    @Field(() => BookingUpsertWithoutPaymentInput, {nullable:true})
    @Type(() => BookingUpsertWithoutPaymentInput)
    upsert?: BookingUpsertWithoutPaymentInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => BookingWhereUniqueInput, {nullable:true})
    @Type(() => BookingWhereUniqueInput)
    connect?: BookingWhereUniqueInput;

    @Field(() => BookingUpdateWithoutPaymentInput, {nullable:true})
    @Type(() => BookingUpdateWithoutPaymentInput)
    update?: BookingUpdateWithoutPaymentInput;
}
