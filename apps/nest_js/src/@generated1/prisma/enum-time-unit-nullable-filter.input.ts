import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TimeUnit } from './time-unit.enum';
import { NestedEnumTimeUnitNullableFilter } from './nested-enum-time-unit-nullable-filter.input';

@InputType()
export class EnumTimeUnitNullableFilter {

    @Field(() => TimeUnit, {nullable:true})
    equals?: keyof typeof TimeUnit;

    @Field(() => [TimeUnit], {nullable:true})
    in?: Array<keyof typeof TimeUnit>;

    @Field(() => [TimeUnit], {nullable:true})
    notIn?: Array<keyof typeof TimeUnit>;

    @Field(() => NestedEnumTimeUnitNullableFilter, {nullable:true})
    not?: NestedEnumTimeUnitNullableFilter;
}
