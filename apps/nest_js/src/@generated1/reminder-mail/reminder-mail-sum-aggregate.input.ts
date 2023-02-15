import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ReminderMailSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    referenceId?: true;

    @Field(() => Boolean, {nullable:true})
    elapsedMinutes?: true;
}
