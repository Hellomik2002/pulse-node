import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class ImpersonationsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    impersonatedUser?: UserOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    impersonatedBy?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    impersonatedUserId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    impersonatedById?: keyof typeof SortOrder;
}
