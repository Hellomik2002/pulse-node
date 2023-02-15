import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class UserAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    startTime?: number;

    @Field(() => Float, {nullable:true})
    endTime?: number;

    @Field(() => Float, {nullable:true})
    bufferTime?: number;

    @Field(() => Float, {nullable:true})
    defaultScheduleId?: number;

    @Field(() => Float, {nullable:true})
    timeFormat?: number;

    @Field(() => Float, {nullable:true})
    invitedTo?: number;
}
