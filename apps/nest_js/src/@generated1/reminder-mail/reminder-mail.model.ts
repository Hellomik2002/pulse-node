import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReminderType } from '../prisma/reminder-type.enum';

@ObjectType()
export class ReminderMail {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    referenceId!: number;

    @Field(() => ReminderType, {nullable:false})
    reminderType!: keyof typeof ReminderType;

    @Field(() => Int, {nullable:false})
    elapsedMinutes!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;
}
