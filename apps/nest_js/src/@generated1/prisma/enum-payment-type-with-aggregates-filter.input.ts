import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentType } from './payment-type.enum';
import { NestedEnumPaymentTypeWithAggregatesFilter } from './nested-enum-payment-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPaymentTypeFilter } from './nested-enum-payment-type-filter.input';

@InputType()
export class EnumPaymentTypeWithAggregatesFilter {

    @Field(() => PaymentType, {nullable:true})
    equals?: keyof typeof PaymentType;

    @Field(() => [PaymentType], {nullable:true})
    in?: Array<keyof typeof PaymentType>;

    @Field(() => [PaymentType], {nullable:true})
    notIn?: Array<keyof typeof PaymentType>;

    @Field(() => NestedEnumPaymentTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPaymentTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPaymentTypeFilter, {nullable:true})
    _min?: NestedEnumPaymentTypeFilter;

    @Field(() => NestedEnumPaymentTypeFilter, {nullable:true})
    _max?: NestedEnumPaymentTypeFilter;
}
