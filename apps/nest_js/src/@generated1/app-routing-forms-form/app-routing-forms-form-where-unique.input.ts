import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class App_RoutingForms_FormWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
