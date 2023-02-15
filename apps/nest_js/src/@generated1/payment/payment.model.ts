import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PaymentType } from '../prisma/payment-type.enum';
import { Int } from '@nestjs/graphql';
import { Booking } from '../booking/booking.model';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class Payment {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    uid!: string;

    @Field(() => PaymentType, {nullable:false})
    type!: keyof typeof PaymentType;

    @Field(() => Int, {nullable:false})
    bookingId!: number;

    @Field(() => Booking, {nullable:true})
    booking?: Booking | null;

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
