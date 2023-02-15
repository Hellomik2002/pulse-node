import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePaymentArgs {

    @Field(() => PaymentWhereUniqueInput, {nullable:false})
    @Type(() => PaymentWhereUniqueInput)
    where!: PaymentWhereUniqueInput;
}
