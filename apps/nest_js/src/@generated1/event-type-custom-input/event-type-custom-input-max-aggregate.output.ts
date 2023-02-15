import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventTypeCustomInputType } from '../prisma/event-type-custom-input-type.enum';

@ObjectType()
export class EventTypeCustomInputMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    eventTypeId?: number;

    @Field(() => String, {nullable:true})
    label?: string;

    @Field(() => EventTypeCustomInputType, {nullable:true})
    type?: keyof typeof EventTypeCustomInputType;

    @Field(() => Boolean, {nullable:true})
    required?: boolean;

    @Field(() => String, {nullable:true})
    placeholder?: string;
}
