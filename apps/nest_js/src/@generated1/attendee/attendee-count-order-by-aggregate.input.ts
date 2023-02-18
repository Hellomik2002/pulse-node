import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AttendeeCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timeZone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pulseUserId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locale?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bookingId?: keyof typeof SortOrder;
}
