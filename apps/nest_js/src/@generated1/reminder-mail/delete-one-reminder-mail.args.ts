import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReminderMailWhereUniqueInput } from './reminder-mail-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneReminderMailArgs {

    @Field(() => ReminderMailWhereUniqueInput, {nullable:false})
    @Type(() => ReminderMailWhereUniqueInput)
    where!: ReminderMailWhereUniqueInput;
}
