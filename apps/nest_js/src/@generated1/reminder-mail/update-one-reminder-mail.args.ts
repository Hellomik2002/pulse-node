import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReminderMailUpdateInput } from './reminder-mail-update.input';
import { Type } from 'class-transformer';
import { ReminderMailWhereUniqueInput } from './reminder-mail-where-unique.input';

@ArgsType()
export class UpdateOneReminderMailArgs {

    @Field(() => ReminderMailUpdateInput, {nullable:false})
    @Type(() => ReminderMailUpdateInput)
    data!: ReminderMailUpdateInput;

    @Field(() => ReminderMailWhereUniqueInput, {nullable:false})
    @Type(() => ReminderMailWhereUniqueInput)
    where!: ReminderMailWhereUniqueInput;
}
