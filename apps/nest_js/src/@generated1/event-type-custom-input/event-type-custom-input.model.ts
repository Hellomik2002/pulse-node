import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventType } from '../event-type/event-type.model';
import { EventTypeCustomInputType } from '../prisma/event-type-custom-input-type.enum';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class EventTypeCustomInput {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    eventTypeId!: number;

    @Field(() => EventType, {nullable:false})
    eventType?: EventType;

    @Field(() => String, {nullable:false})
    label!: string;

    @Field(() => EventTypeCustomInputType, {nullable:false})
    type!: keyof typeof EventTypeCustomInputType;

    @Field(() => GraphQLJSON, {nullable:true})
    options!: any | null;

    @Field(() => Boolean, {nullable:false})
    required!: boolean;

    @Field(() => String, {nullable:false,defaultValue:''})
    placeholder!: string;
}
