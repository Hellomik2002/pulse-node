import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EventTypeOrderByWithRelationInput } from '../event-type/event-type-order-by-with-relation.input';

@InputType()
export class EventTypeCustomInputOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventTypeId?: keyof typeof SortOrder;

    @Field(() => EventTypeOrderByWithRelationInput, {nullable:true})
    eventType?: EventTypeOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    label?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    options?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    required?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    placeholder?: keyof typeof SortOrder;
}
