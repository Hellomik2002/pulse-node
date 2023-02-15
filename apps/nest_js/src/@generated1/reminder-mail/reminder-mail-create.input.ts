import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReminderType } from '../prisma/reminder-type.enum';

@InputType()
export class ReminderMailCreateInput {

    @Field(() => Int, {nullable:false})
    referenceId!: number;

    @Field(() => ReminderType, {nullable:false})
    reminderType!: keyof typeof ReminderType;

    @Field(() => Int, {nullable:false})
    elapsedMinutes!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
