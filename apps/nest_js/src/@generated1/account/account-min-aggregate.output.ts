import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AccountMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => String, {nullable:true})
    type?: string;

    @Field(() => String, {nullable:true})
    provider?: string;

    @Field(() => String, {nullable:true})
    providerAccountId?: string;

    @Field(() => String, {nullable:true})
    refresh_token?: string;

    @Field(() => String, {nullable:true})
    access_token?: string;

    @Field(() => Int, {nullable:true})
    expires_at?: number;

    @Field(() => String, {nullable:true})
    token_type?: string;

    @Field(() => String, {nullable:true})
    scope?: string;

    @Field(() => String, {nullable:true})
    id_token?: string;

    @Field(() => String, {nullable:true})
    session_state?: string;
}
