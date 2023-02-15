import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class App_RoutingForms_FormSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    userId?: true;
}
