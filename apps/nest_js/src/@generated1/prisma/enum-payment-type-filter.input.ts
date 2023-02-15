import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentType } from './payment-type.enum';
import { NestedEnumPaymentTypeFilter } from './nested-enum-payment-type-filter.input';

@InputType()
export class EnumPaymentTypeFilter {

    @Field(() => PaymentType, {nullable:true})
    equals?: keyof typeof PaymentType;

    @Field(() => [PaymentType], {nullable:true})
    in?: Array<keyof typeof PaymentType>;

    @Field(() => [PaymentType], {nullable:true})
    notIn?: Array<keyof typeof PaymentType>;

    @Field(() => NestedEnumPaymentTypeFilter, {nullable:true})
    not?: NestedEnumPaymentTypeFilter;
}
