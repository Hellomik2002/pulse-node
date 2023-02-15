import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class App_RoutingForms_FormAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    userId?: true;
}
