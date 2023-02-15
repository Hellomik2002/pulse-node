import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumReminderTypeWithAggregatesFilter } from '../prisma/enum-reminder-type-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ReminderMailScalarWhereWithAggregatesInput {

    @Field(() => [ReminderMailScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ReminderMailScalarWhereWithAggregatesInput>;

    @Field(() => [ReminderMailScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ReminderMailScalarWhereWithAggregatesInput>;

    @Field(() => [ReminderMailScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ReminderMailScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    referenceId?: IntWithAggregatesFilter;

    @Field(() => EnumReminderTypeWithAggregatesFilter, {nullable:true})
    reminderType?: EnumReminderTypeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    elapsedMinutes?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
