import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchedulingType } from './scheduling-type.enum';

@InputType()
export class NestedEnumSchedulingTypeNullableFilter {

    @Field(() => SchedulingType, {nullable:true})
    equals?: keyof typeof SchedulingType;

    @Field(() => [SchedulingType], {nullable:true})
    in?: Array<keyof typeof SchedulingType>;

    @Field(() => [SchedulingType], {nullable:true})
    notIn?: Array<keyof typeof SchedulingType>;

    @Field(() => NestedEnumSchedulingTypeNullableFilter, {nullable:true})
    not?: NestedEnumSchedulingTypeNullableFilter;
}
