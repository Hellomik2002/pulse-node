import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReminderMailWhereInput } from './reminder-mail-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyReminderMailArgs {

    @Field(() => ReminderMailWhereInput, {nullable:true})
    @Type(() => ReminderMailWhereInput)
    where?: ReminderMailWhereInput;
}
