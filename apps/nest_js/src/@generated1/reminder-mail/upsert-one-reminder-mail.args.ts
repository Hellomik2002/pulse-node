import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReminderMailWhereUniqueInput } from './reminder-mail-where-unique.input';
import { Type } from 'class-transformer';
import { ReminderMailCreateInput } from './reminder-mail-create.input';
import { ReminderMailUpdateInput } from './reminder-mail-update.input';

@ArgsType()
export class UpsertOneReminderMailArgs {

    @Field(() => ReminderMailWhereUniqueInput, {nullable:false})
    @Type(() => ReminderMailWhereUniqueInput)
    where!: ReminderMailWhereUniqueInput;

    @Field(() => ReminderMailCreateInput, {nullable:false})
    @Type(() => ReminderMailCreateInput)
    create!: ReminderMailCreateInput;

    @Field(() => ReminderMailUpdateInput, {nullable:false})
    @Type(() => ReminderMailUpdateInput)
    update!: ReminderMailUpdateInput;
}
