import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ApiKeyCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    note!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    expiresAt!: number;

    @Field(() => Int, {nullable:false})
    lastUsedAt!: number;

    @Field(() => Int, {nullable:false})
    hashedKey!: number;

    @Field(() => Int, {nullable:false})
    appId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
