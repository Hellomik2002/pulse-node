import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumPaymentTypeWithAggregatesFilter } from '../prisma/enum-payment-type-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class PaymentScalarWhereWithAggregatesInput {

    @Field(() => [PaymentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PaymentScalarWhereWithAggregatesInput>;

    @Field(() => [PaymentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PaymentScalarWhereWithAggregatesInput>;

    @Field(() => [PaymentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PaymentScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    uid?: StringWithAggregatesFilter;

    @Field(() => EnumPaymentTypeWithAggregatesFilter, {nullable:true})
    type?: EnumPaymentTypeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    bookingId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    amount?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    fee?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    currency?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    success?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    refunded?: BoolWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    @Type(() => JsonWithAggregatesFilter)
    data?: JsonWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    externalId?: StringWithAggregatesFilter;
}
