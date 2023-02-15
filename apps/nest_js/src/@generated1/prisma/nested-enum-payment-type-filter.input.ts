import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentType } from './payment-type.enum';

@InputType()
export class NestedEnumPaymentTypeFilter {

    @Field(() => PaymentType, {nullable:true})
    equals?: keyof typeof PaymentType;

    @Field(() => [PaymentType], {nullable:true})
    in?: Array<keyof typeof PaymentType>;

    @Field(() => [PaymentType], {nullable:true})
    notIn?: Array<keyof typeof PaymentType>;

    @Field(() => NestedEnumPaymentTypeFilter, {nullable:true})
    not?: NestedEnumPaymentTypeFilter;
}
