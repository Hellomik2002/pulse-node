import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class AccountUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => String, {nullable:false})
    provider!: string;

    @Field(() => String, {nullable:false})
    providerAccountId!: string;

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
