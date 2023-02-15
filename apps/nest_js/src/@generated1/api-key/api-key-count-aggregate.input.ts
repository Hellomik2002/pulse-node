import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ApiKeyCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    note?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    expiresAt?: true;

    @Field(() => Boolean, {nullable:true})
    lastUsedAt?: true;

    @Field(() => Boolean, {nullable:true})
    hashedKey?: true;

    @Field(() => Boolean, {nullable:true})
    appId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
