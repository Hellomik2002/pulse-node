import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReminderMailCreateManyInput } from './reminder-mail-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyReminderMailArgs {

    @Field(() => [ReminderMailCreateManyInput], {nullable:false})
    @Type(() => ReminderMailCreateManyInput)
    data!: Array<ReminderMailCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
