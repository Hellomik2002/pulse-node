import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReminderType } from '../prisma/reminder-type.enum';

@ObjectType()
export class ReminderMailMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    referenceId?: number;

    @Field(() => ReminderType, {nullable:true})
    reminderType?: keyof typeof ReminderType;

    @Field(() => Int, {nullable:true})
    elapsedMinutes?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
