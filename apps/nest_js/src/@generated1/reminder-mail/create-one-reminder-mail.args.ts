import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReminderMailCreateInput } from './reminder-mail-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneReminderMailArgs {

    @Field(() => ReminderMailCreateInput, {nullable:false})
    @Type(() => ReminderMailCreateInput)
    data!: ReminderMailCreateInput;
}
