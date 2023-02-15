import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AccountCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    provider!: number;

    @Field(() => Int, {nullable:false})
    providerAccountId!: number;

    @Field(() => Int, {nullable:false})
    refresh_token!: number;

    @Field(() => Int, {nullable:false})
    access_token!: number;

    @Field(() => Int, {nullable:false})
    expires_at!: number;

    @Field(() => Int, {nullable:false})
    token_type!: number;

    @Field(() => Int, {nullable:false})
    scope!: number;

    @Field(() => Int, {nullable:false})
    id_token!: number;

    @Field(() => Int, {nullable:false})
    session_state!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
