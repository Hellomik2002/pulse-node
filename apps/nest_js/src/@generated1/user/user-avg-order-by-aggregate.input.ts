import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bufferTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    defaultScheduleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timeFormat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    invitedTo?: keyof typeof SortOrder;
}
