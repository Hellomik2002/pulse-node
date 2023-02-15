import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class App_RoutingForms_FormResponseCreateWithoutFormInput {

    @Field(() => String, {nullable:true})
    formFillerId?: string;

    @Field(() => GraphQLJSON, {nullable:false})
    response!: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
