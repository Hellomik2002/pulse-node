import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EventTypeOrderByWithRelationInput } from '../event-type/event-type-order-by-with-relation.input';

@InputType()
export class HashedLinkOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    link?: keyof typeof SortOrder;

    @Field(() => EventTypeOrderByWithRelationInput, {nullable:true})
    eventType?: EventTypeOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    eventTypeId?: keyof typeof SortOrder;
}
