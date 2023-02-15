import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { EventTypeRelationFilter } from '../event-type/event-type-relation-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class HostWhereInput {

    @Field(() => [HostWhereInput], {nullable:true})
    AND?: Array<HostWhereInput>;

    @Field(() => [HostWhereInput], {nullable:true})
    OR?: Array<HostWhereInput>;

    @Field(() => [HostWhereInput], {nullable:true})
    NOT?: Array<HostWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => EventTypeRelationFilter, {nullable:true})
    eventType?: EventTypeRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    eventTypeId?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    isFixed?: BoolFilter;
}
