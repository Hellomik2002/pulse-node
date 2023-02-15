import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ImpersonationsScalarWhereWithAggregatesInput {

    @Field(() => [ImpersonationsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ImpersonationsScalarWhereWithAggregatesInput>;

    @Field(() => [ImpersonationsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ImpersonationsScalarWhereWithAggregatesInput>;

    @Field(() => [ImpersonationsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ImpersonationsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    impersonatedUserId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    impersonatedById?: IntWithAggregatesFilter;
}
