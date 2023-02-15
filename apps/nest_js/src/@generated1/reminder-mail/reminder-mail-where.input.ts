import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumReminderTypeFilter } from '../prisma/enum-reminder-type-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ReminderMailWhereInput {

    @Field(() => [ReminderMailWhereInput], {nullable:true})
    AND?: Array<ReminderMailWhereInput>;

    @Field(() => [ReminderMailWhereInput], {nullable:true})
    OR?: Array<ReminderMailWhereInput>;

    @Field(() => [ReminderMailWhereInput], {nullable:true})
    NOT?: Array<ReminderMailWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    referenceId?: IntFilter;

    @Field(() => EnumReminderTypeFilter, {nullable:true})
    reminderType?: EnumReminderTypeFilter;

    @Field(() => IntFilter, {nullable:true})
    elapsedMinutes?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
