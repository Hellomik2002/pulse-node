import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeWhereInput } from './event-type-where.input';

@InputType()
export class EventTypeRelationFilter {

    @Field(() => EventTypeWhereInput, {nullable:true})
    is?: EventTypeWhereInput;

    @Field(() => EventTypeWhereInput, {nullable:true})
    isNot?: EventTypeWhereInput;
}
