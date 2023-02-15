import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCustomInputWhereInput } from './event-type-custom-input-where.input';

@InputType()
export class EventTypeCustomInputListRelationFilter {

    @Field(() => EventTypeCustomInputWhereInput, {nullable:true})
    every?: EventTypeCustomInputWhereInput;

    @Field(() => EventTypeCustomInputWhereInput, {nullable:true})
    some?: EventTypeCustomInputWhereInput;

    @Field(() => EventTypeCustomInputWhereInput, {nullable:true})
    none?: EventTypeCustomInputWhereInput;
}
