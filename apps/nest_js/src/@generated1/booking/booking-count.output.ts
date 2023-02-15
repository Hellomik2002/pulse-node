import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BookingCount {

    @Field(() => Int, {nullable:false})
    references?: number;

    @Field(() => Int, {nullable:false})
    attendees?: number;

    @Field(() => Int, {nullable:false})
    payment?: number;

    @Field(() => Int, {nullable:false})
    workflowReminders?: number;
}
