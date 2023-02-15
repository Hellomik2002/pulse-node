import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { EventTypeOrderByWithRelationInput } from '../event-type/event-type-order-by-with-relation.input';
import { AppOrderByWithRelationInput } from '../app/app-order-by-with-relation.input';

@InputType()
export class WebhookOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventTypeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    subscriberUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    payloadTemplate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventTriggers?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => EventTypeOrderByWithRelationInput, {nullable:true})
    eventType?: EventTypeOrderByWithRelationInput;

    @Field(() => AppOrderByWithRelationInput, {nullable:true})
    app?: AppOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    appId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    secret?: keyof typeof SortOrder;
}
