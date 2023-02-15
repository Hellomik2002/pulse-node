import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchedulingType } from './scheduling-type.enum';
import { NestedEnumSchedulingTypeNullableFilter } from './nested-enum-scheduling-type-nullable-filter.input';

@InputType()
export class EnumSchedulingTypeNullableFilter {

    @Field(() => SchedulingType, {nullable:true})
    equals?: keyof typeof SchedulingType;

    @Field(() => [SchedulingType], {nullable:true})
    in?: Array<keyof typeof SchedulingType>;

    @Field(() => [SchedulingType], {nullable:true})
    notIn?: Array<keyof typeof SchedulingType>;

    @Field(() => NestedEnumSchedulingTypeNullableFilter, {nullable:true})
    not?: NestedEnumSchedulingTypeNullableFilter;
}
