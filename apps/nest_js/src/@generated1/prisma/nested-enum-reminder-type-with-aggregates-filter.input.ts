import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReminderType } from './reminder-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumReminderTypeFilter } from './nested-enum-reminder-type-filter.input';

@InputType()
export class NestedEnumReminderTypeWithAggregatesFilter {

    @Field(() => ReminderType, {nullable:true})
    equals?: keyof typeof ReminderType;

    @Field(() => [ReminderType], {nullable:true})
    in?: Array<keyof typeof ReminderType>;

    @Field(() => [ReminderType], {nullable:true})
    notIn?: Array<keyof typeof ReminderType>;

    @Field(() => NestedEnumReminderTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumReminderTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumReminderTypeFilter, {nullable:true})
    _min?: NestedEnumReminderTypeFilter;

    @Field(() => NestedEnumReminderTypeFilter, {nullable:true})
    _max?: NestedEnumReminderTypeFilter;
}
