import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    startTime?: number;

    @Field(() => Int, {nullable:true})
    endTime?: number;

    @Field(() => Int, {nullable:true})
    bufferTime?: number;

    @Field(() => Int, {nullable:true})
    defaultScheduleId?: number;

    @Field(() => Int, {nullable:true})
    timeFormat?: number;

    @Field(() => Int, {nullable:true})
    invitedTo?: number;
}
