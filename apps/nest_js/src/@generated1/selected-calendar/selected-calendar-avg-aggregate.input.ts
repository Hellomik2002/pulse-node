import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SelectedCalendarAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    userId?: true;
}
