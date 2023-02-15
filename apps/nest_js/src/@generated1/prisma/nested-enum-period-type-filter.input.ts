import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PeriodType } from './period-type.enum';

@InputType()
export class NestedEnumPeriodTypeFilter {

    @Field(() => PeriodType, {nullable:true})
    equals?: keyof typeof PeriodType;

    @Field(() => [PeriodType], {nullable:true})
    in?: Array<keyof typeof PeriodType>;

    @Field(() => [PeriodType], {nullable:true})
    notIn?: Array<keyof typeof PeriodType>;

    @Field(() => NestedEnumPeriodTypeFilter, {nullable:true})
    not?: NestedEnumPeriodTypeFilter;
}
