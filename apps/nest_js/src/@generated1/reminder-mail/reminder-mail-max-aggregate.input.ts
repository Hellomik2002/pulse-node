import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ReminderMailMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    referenceId?: true;

    @Field(() => Boolean, {nullable:true})
    reminderType?: true;

    @Field(() => Boolean, {nullable:true})
    elapsedMinutes?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}
