import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class App_RoutingForms_FormResponseCreateManyFormInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    formFillerId?: string;

    @Field(() => GraphQLJSON, {nullable:false})
    response!: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
