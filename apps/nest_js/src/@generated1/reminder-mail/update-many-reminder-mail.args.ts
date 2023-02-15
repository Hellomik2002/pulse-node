import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReminderMailUpdateManyMutationInput } from './reminder-mail-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ReminderMailWhereInput } from './reminder-mail-where.input';

@ArgsType()
export class UpdateManyReminderMailArgs {

    @Field(() => ReminderMailUpdateManyMutationInput, {nullable:false})
    @Type(() => ReminderMailUpdateManyMutationInput)
    data!: ReminderMailUpdateManyMutationInput;

    @Field(() => ReminderMailWhereInput, {nullable:true})
    @Type(() => ReminderMailWhereInput)
    where?: ReminderMailWhereInput;
}
