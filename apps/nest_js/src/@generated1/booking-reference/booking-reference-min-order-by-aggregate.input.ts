import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BookingReferenceMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    meetingId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    meetingPassword?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    meetingUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bookingId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    externalCalendarId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    credentialId?: keyof typeof SortOrder;
}
