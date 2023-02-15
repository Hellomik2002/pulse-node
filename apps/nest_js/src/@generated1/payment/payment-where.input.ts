import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumPaymentTypeFilter } from '../prisma/enum-payment-type-filter.input';
import { BookingRelationFilter } from '../booking/booking-relation-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class PaymentWhereInput {

    @Field(() => [PaymentWhereInput], {nullable:true})
    AND?: Array<PaymentWhereInput>;

    @Field(() => [PaymentWhereInput], {nullable:true})
    OR?: Array<PaymentWhereInput>;

    @Field(() => [PaymentWhereInput], {nullable:true})
    NOT?: Array<PaymentWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    uid?: StringFilter;

    @Field(() => EnumPaymentTypeFilter, {nullable:true})
    type?: EnumPaymentTypeFilter;

    @Field(() => IntFilter, {nullable:true})
    bookingId?: IntFilter;

    @Field(() => BookingRelationFilter, {nullable:true})
    booking?: BookingRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    amount?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    fee?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    currency?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    success?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    refunded?: BoolFilter;

    @Field(() => JsonFilter, {nullable:true})
    @Type(() => JsonFilter)
    data?: JsonFilter;

    @Field(() => StringFilter, {nullable:true})
    externalId?: StringFilter;
}
