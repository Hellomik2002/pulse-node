import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EventTypeRelationFilter } from '../event-type/event-type-relation-filter.input';

@InputType()
export class HashedLinkWhereInput {

    @Field(() => [HashedLinkWhereInput], {nullable:true})
    AND?: Array<HashedLinkWhereInput>;

    @Field(() => [HashedLinkWhereInput], {nullable:true})
    OR?: Array<HashedLinkWhereInput>;

    @Field(() => [HashedLinkWhereInput], {nullable:true})
    NOT?: Array<HashedLinkWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    link?: StringFilter;

    @Field(() => EventTypeRelationFilter, {nullable:true})
    eventType?: EventTypeRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    eventTypeId?: IntFilter;
}
