import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class HostScalarWhereWithAggregatesInput {

    @Field(() => [HostScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<HostScalarWhereWithAggregatesInput>;

    @Field(() => [HostScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<HostScalarWhereWithAggregatesInput>;

    @Field(() => [HostScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<HostScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    eventTypeId?: IntWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isFixed?: BoolWithAggregatesFilter;
}
