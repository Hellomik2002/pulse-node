import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCustomInputType } from './event-type-custom-input-type.enum';

@InputType()
export class NestedEnumEventTypeCustomInputTypeFilter {

    @Field(() => EventTypeCustomInputType, {nullable:true})
    equals?: keyof typeof EventTypeCustomInputType;

    @Field(() => [EventTypeCustomInputType], {nullable:true})
    in?: Array<keyof typeof EventTypeCustomInputType>;

    @Field(() => [EventTypeCustomInputType], {nullable:true})
    notIn?: Array<keyof typeof EventTypeCustomInputType>;

    @Field(() => NestedEnumEventTypeCustomInputTypeFilter, {nullable:true})
    not?: NestedEnumEventTypeCustomInputTypeFilter;
}
