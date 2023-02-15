import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DestinationCalendarMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    integration?: string;

    @Field(() => String, {nullable:true})
    externalId?: string;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    eventTypeId?: number;

    @Field(() => Int, {nullable:true})
    credentialId?: number;
}
