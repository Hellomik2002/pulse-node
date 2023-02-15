import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AppCount {

    @Field(() => Int, {nullable:false})
    credentials?: number;

    @Field(() => Int, {nullable:false})
    Webhook?: number;

    @Field(() => Int, {nullable:false})
    ApiKey?: number;
}
