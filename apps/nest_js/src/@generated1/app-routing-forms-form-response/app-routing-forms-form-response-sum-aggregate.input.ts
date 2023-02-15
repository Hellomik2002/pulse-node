import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class App_RoutingForms_FormResponseSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
