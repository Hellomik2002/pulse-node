import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PaymentType } from '../prisma/payment-type.enum';

@ObjectType()
export class PaymentMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    uid?: string;

    @Field(() => PaymentType, {nullable:true})
    type?: keyof typeof PaymentType;

    @Field(() => Int, {nullable:true})
    bookingId?: number;

    @Field(() => Int, {nullable:true})
    amount?: number;

    @Field(() => Int, {nullable:true})
    fee?: number;

    @Field(() => String, {nullable:true})
    currency?: string;

    @Field(() => Boolean, {nullable:true})
    success?: boolean;

    @Field(() => Boolean, {nullable:true})
    refunded?: boolean;

    @Field(() => String, {nullable:true})
    externalId?: string;
}
