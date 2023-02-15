import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PeriodType } from './period-type.enum';
import { NestedEnumPeriodTypeWithAggregatesFilter } from './nested-enum-period-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPeriodTypeFilter } from './nested-enum-period-type-filter.input';

@InputType()
export class EnumPeriodTypeWithAggregatesFilter {

    @Field(() => PeriodType, {nullable:true})
    equals?: keyof typeof PeriodType;

    @Field(() => [PeriodType], {nullable:true})
    in?: Array<keyof typeof PeriodType>;

    @Field(() => [PeriodType], {nullable:true})
    notIn?: Array<keyof typeof PeriodType>;

    @Field(() => NestedEnumPeriodTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPeriodTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPeriodTypeFilter, {nullable:true})
    _min?: NestedEnumPeriodTypeFilter;

    @Field(() => NestedEnumPeriodTypeFilter, {nullable:true})
    _max?: NestedEnumPeriodTypeFilter;
}
