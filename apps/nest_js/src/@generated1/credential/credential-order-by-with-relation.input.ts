import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { AppOrderByWithRelationInput } from '../app/app-order-by-with-relation.input';
import { DestinationCalendarOrderByRelationAggregateInput } from '../destination-calendar/destination-calendar-order-by-relation-aggregate.input';

@InputType()
export class CredentialOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    key?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => AppOrderByWithRelationInput, {nullable:true})
    app?: AppOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    appId?: keyof typeof SortOrder;

    @Field(() => DestinationCalendarOrderByRelationAggregateInput, {nullable:true})
    destinationCalendars?: DestinationCalendarOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    invalid?: keyof typeof SortOrder;
}
