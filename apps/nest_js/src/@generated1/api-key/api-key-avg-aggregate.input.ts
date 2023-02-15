import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ApiKeyAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    userId?: true;
}
