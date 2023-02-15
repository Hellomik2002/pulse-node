import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventTypeCustomInputType } from '../prisma/event-type-custom-input-type.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class EventTypeCustomInputCreateManyEventTypeInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    label!: string;

    @Field(() => EventTypeCustomInputType, {nullable:false})
    type!: keyof typeof EventTypeCustomInputType;

    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;

    @Field(() => Boolean, {nullable:false})
    required!: boolean;

    @Field(() => String, {nullable:true})
    placeholder?: string;
}
