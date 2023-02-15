import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { EventType } from '../event-type/event-type.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class HashedLink {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    link!: string;

    @Field(() => EventType, {nullable:false})
    eventType?: EventType;

    @Field(() => Int, {nullable:false})
    eventTypeId!: number;
}
