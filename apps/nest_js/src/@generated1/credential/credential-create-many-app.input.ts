import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class CredentialCreateManyAppInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    key!: any;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Boolean, {nullable:true})
    invalid?: boolean;
}
