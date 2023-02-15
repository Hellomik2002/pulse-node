import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MembershipSumAggregate {

    @Field(() => Int, {nullable:true})
    teamId?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;
}
