import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCustomInputType } from './event-type-custom-input-type.enum';
import { NestedEnumEventTypeCustomInputTypeFilter } from './nested-enum-event-type-custom-input-type-filter.input';

@InputType()
export class EnumEventTypeCustomInputTypeFilter {

    @Field(() => EventTypeCustomInputType, {nullable:true})
    equals?: keyof typeof EventTypeCustomInputType;

    @Field(() => [EventTypeCustomInputType], {nullable:true})
    in?: Array<keyof typeof EventTypeCustomInputType>;

    @Field(() => [EventTypeCustomInputType], {nullable:true})
    notIn?: Array<keyof typeof EventTypeCustomInputType>;

    @Field(() => NestedEnumEventTypeCustomInputTypeFilter, {nullable:true})
    not?: NestedEnumEventTypeCustomInputTypeFilter;
}
