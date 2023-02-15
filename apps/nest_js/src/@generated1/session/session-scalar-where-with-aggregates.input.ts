import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class SessionScalarWhereWithAggregatesInput {

    @Field(() => [SessionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SessionScalarWhereWithAggregatesInput>;

    @Field(() => [SessionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SessionScalarWhereWithAggregatesInput>;

    @Field(() => [SessionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SessionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    sessionToken?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expires?: DateTimeWithAggregatesFilter;
}
