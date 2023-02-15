import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchedulingType } from './scheduling-type.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumSchedulingTypeNullableFilter } from './nested-enum-scheduling-type-nullable-filter.input';

@InputType()
export class NestedEnumSchedulingTypeNullableWithAggregatesFilter {

    @Field(() => SchedulingType, {nullable:true})
    equals?: keyof typeof SchedulingType;

    @Field(() => [SchedulingType], {nullable:true})
    in?: Array<keyof typeof SchedulingType>;

    @Field(() => [SchedulingType], {nullable:true})
    notIn?: Array<keyof typeof SchedulingType>;

    @Field(() => NestedEnumSchedulingTypeNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumSchedulingTypeNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumSchedulingTypeNullableFilter, {nullable:true})
    _min?: NestedEnumSchedulingTypeNullableFilter;

    @Field(() => NestedEnumSchedulingTypeNullableFilter, {nullable:true})
    _max?: NestedEnumSchedulingTypeNullableFilter;
}
