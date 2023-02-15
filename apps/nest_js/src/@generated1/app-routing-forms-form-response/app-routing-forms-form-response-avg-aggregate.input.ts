import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class App_RoutingForms_FormResponseAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
