import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReminderType } from './reminder-type.enum';
import { NestedEnumReminderTypeFilter } from './nested-enum-reminder-type-filter.input';

@InputType()
export class EnumReminderTypeFilter {

    @Field(() => ReminderType, {nullable:true})
    equals?: keyof typeof ReminderType;

    @Field(() => [ReminderType], {nullable:true})
    in?: Array<keyof typeof ReminderType>;

    @Field(() => [ReminderType], {nullable:true})
    notIn?: Array<keyof typeof ReminderType>;

    @Field(() => NestedEnumReminderTypeFilter, {nullable:true})
    not?: NestedEnumReminderTypeFilter;
}
