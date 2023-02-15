import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class ImpersonationsWhereInput {

    @Field(() => [ImpersonationsWhereInput], {nullable:true})
    AND?: Array<ImpersonationsWhereInput>;

    @Field(() => [ImpersonationsWhereInput], {nullable:true})
    OR?: Array<ImpersonationsWhereInput>;

    @Field(() => [ImpersonationsWhereInput], {nullable:true})
    NOT?: Array<ImpersonationsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    impersonatedUser?: UserRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    impersonatedBy?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    impersonatedUserId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    impersonatedById?: IntFilter;
}
