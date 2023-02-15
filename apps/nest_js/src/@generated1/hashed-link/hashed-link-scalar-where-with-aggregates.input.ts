import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class HashedLinkScalarWhereWithAggregatesInput {

    @Field(() => [HashedLinkScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<HashedLinkScalarWhereWithAggregatesInput>;

    @Field(() => [HashedLinkScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<HashedLinkScalarWhereWithAggregatesInput>;

    @Field(() => [HashedLinkScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<HashedLinkScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    link?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    eventTypeId?: IntWithAggregatesFilter;
}
