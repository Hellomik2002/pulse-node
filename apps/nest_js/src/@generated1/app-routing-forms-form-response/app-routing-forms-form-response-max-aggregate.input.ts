import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class App_RoutingForms_FormResponseMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    formFillerId?: true;

    @Field(() => Boolean, {nullable:true})
    formId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}
