import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PaymentType } from '../prisma/payment-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { PaymentCountAggregate } from './payment-count-aggregate.output';
import { PaymentAvgAggregate } from './payment-avg-aggregate.output';
import { PaymentSumAggregate } from './payment-sum-aggregate.output';
import { PaymentMinAggregate } from './payment-min-aggregate.output';
import { PaymentMaxAggregate } from './payment-max-aggregate.output';

@ObjectType()
export class PaymentGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    uid!: string;

    @Field(() => PaymentType, {nullable:false})
    type!: keyof typeof PaymentType;

    @Field(() => Int, {nullable:false})
    bookingId!: number;

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

    @Field(() => PaymentCountAggregate, {nullable:true})
    _count?: PaymentCountAggregate;

    @Field(() => PaymentAvgAggregate, {nullable:true})
    _avg?: PaymentAvgAggregate;

    @Field(() => PaymentSumAggregate, {nullable:true})
    _sum?: PaymentSumAggregate;

    @Field(() => PaymentMinAggregate, {nullable:true})
    _min?: PaymentMinAggregate;

    @Field(() => PaymentMaxAggregate, {nullable:true})
    _max?: PaymentMaxAggregate;
}
