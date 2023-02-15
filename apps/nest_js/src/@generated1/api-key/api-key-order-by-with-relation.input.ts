import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { AppOrderByWithRelationInput } from '../app/app-order-by-with-relation.input';

@InputType()
export class ApiKeyOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    note?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expiresAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastUsedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hashedKey?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => AppOrderByWithRelationInput, {nullable:true})
    app?: AppOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    appId?: keyof typeof SortOrder;
}
