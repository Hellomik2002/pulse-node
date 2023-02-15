import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { BookingOrderByRelationAggregateInput } from '../booking/booking-order-by-relation-aggregate.input';
import { EventTypeOrderByWithRelationInput } from '../event-type/event-type-order-by-with-relation.input';
import { CredentialOrderByWithRelationInput } from '../credential/credential-order-by-with-relation.input';

@InputType()
export class DestinationCalendarOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    integration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    externalId?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => BookingOrderByRelationAggregateInput, {nullable:true})
    booking?: BookingOrderByRelationAggregateInput;

    @Field(() => EventTypeOrderByWithRelationInput, {nullable:true})
    eventType?: EventTypeOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    eventTypeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    credentialId?: keyof typeof SortOrder;

    @Field(() => CredentialOrderByWithRelationInput, {nullable:true})
    credential?: CredentialOrderByWithRelationInput;
}
