import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeWhereInput } from './event-type-where.input';

@InputType()
export class EventTypeListRelationFilter {

    @Field(() => EventTypeWhereInput, {nullable:true})
    every?: EventTypeWhereInput;

    @Field(() => EventTypeWhereInput, {nullable:true})
    some?: EventTypeWhereInput;

    @Field(() => EventTypeWhereInput, {nullable:true})
    none?: EventTypeWhereInput;
}
