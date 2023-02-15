import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class FeedbackScalarWhereWithAggregatesInput {

    @Field(() => [FeedbackScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FeedbackScalarWhereWithAggregatesInput>;

    @Field(() => [FeedbackScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FeedbackScalarWhereWithAggregatesInput>;

    @Field(() => [FeedbackScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FeedbackScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    date?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    rating?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    comment?: StringNullableWithAggregatesFilter;
}
