import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class VerifiedNumberScalarWhereWithAggregatesInput {

    @Field(() => [VerifiedNumberScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<VerifiedNumberScalarWhereWithAggregatesInput>;

    @Field(() => [VerifiedNumberScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<VerifiedNumberScalarWhereWithAggregatesInput>;

    @Field(() => [VerifiedNumberScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<VerifiedNumberScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    phoneNumber?: StringWithAggregatesFilter;
}
