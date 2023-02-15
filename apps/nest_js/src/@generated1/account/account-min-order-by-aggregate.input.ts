import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AccountMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    providerAccountId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    refresh_token?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    access_token?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expires_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    token_type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    scope?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    id_token?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    session_state?: keyof typeof SortOrder;
}
