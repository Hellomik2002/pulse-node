import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class SelectedCalendarScalarWhereWithAggregatesInput {

    @Field(() => [SelectedCalendarScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SelectedCalendarScalarWhereWithAggregatesInput>;

    @Field(() => [SelectedCalendarScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SelectedCalendarScalarWhereWithAggregatesInput>;

    @Field(() => [SelectedCalendarScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SelectedCalendarScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    integration?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    externalId?: StringWithAggregatesFilter;
}
