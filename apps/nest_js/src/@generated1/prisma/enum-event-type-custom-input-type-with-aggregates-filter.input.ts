import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCustomInputType } from './event-type-custom-input-type.enum';
import { NestedEnumEventTypeCustomInputTypeWithAggregatesFilter } from './nested-enum-event-type-custom-input-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumEventTypeCustomInputTypeFilter } from './nested-enum-event-type-custom-input-type-filter.input';

@InputType()
export class EnumEventTypeCustomInputTypeWithAggregatesFilter {

    @Field(() => EventTypeCustomInputType, {nullable:true})
    equals?: keyof typeof EventTypeCustomInputType;

    @Field(() => [EventTypeCustomInputType], {nullable:true})
    in?: Array<keyof typeof EventTypeCustomInputType>;

    @Field(() => [EventTypeCustomInputType], {nullable:true})
    notIn?: Array<keyof typeof EventTypeCustomInputType>;

    @Field(() => NestedEnumEventTypeCustomInputTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumEventTypeCustomInputTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumEventTypeCustomInputTypeFilter, {nullable:true})
    _min?: NestedEnumEventTypeCustomInputTypeFilter;

    @Field(() => NestedEnumEventTypeCustomInputTypeFilter, {nullable:true})
    _max?: NestedEnumEventTypeCustomInputTypeFilter;
}
