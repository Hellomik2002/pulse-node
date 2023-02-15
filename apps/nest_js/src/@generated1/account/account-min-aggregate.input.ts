import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AccountMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    provider?: true;

    @Field(() => Boolean, {nullable:true})
    providerAccountId?: true;

    @Field(() => Boolean, {nullable:true})
    refresh_token?: true;

    @Field(() => Boolean, {nullable:true})
    access_token?: true;

    @Field(() => Boolean, {nullable:true})
    expires_at?: true;

    @Field(() => Boolean, {nullable:true})
    token_type?: true;

    @Field(() => Boolean, {nullable:true})
    scope?: true;

    @Field(() => Boolean, {nullable:true})
    id_token?: true;

    @Field(() => Boolean, {nullable:true})
    session_state?: true;
}
