import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class Account {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => String, {nullable:false})
    provider!: string;

    @Field(() => String, {nullable:false})
    providerAccountId!: string;

    @Field(() => String, {nullable:true})
    refresh_token!: string | null;

    @Field(() => String, {nullable:true})
    access_token!: string | null;

    @Field(() => Int, {nullable:true})
    expires_at!: number | null;

    @Field(() => String, {nullable:true})
    token_type!: string | null;

    @Field(() => String, {nullable:true})
    scope!: string | null;

    @Field(() => String, {nullable:true})
    id_token!: string | null;

    @Field(() => String, {nullable:true})
    session_state!: string | null;

    @Field(() => User, {nullable:true})
    user?: User | null;
}
