import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TimeUnit } from './time-unit.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumTimeUnitNullableFilter } from './nested-enum-time-unit-nullable-filter.input';

@InputType()
export class NestedEnumTimeUnitNullableWithAggregatesFilter {

    @Field(() => TimeUnit, {nullable:true})
    equals?: keyof typeof TimeUnit;

    @Field(() => [TimeUnit], {nullable:true})
    in?: Array<keyof typeof TimeUnit>;

    @Field(() => [TimeUnit], {nullable:true})
    notIn?: Array<keyof typeof TimeUnit>;

    @Field(() => NestedEnumTimeUnitNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTimeUnitNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumTimeUnitNullableFilter, {nullable:true})
    _min?: NestedEnumTimeUnitNullableFilter;

    @Field(() => NestedEnumTimeUnitNullableFilter, {nullable:true})
    _max?: NestedEnumTimeUnitNullableFilter;
}
