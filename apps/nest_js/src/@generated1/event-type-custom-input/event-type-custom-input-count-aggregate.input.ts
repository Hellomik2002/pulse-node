import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EventTypeCustomInputCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    eventTypeId?: true;

    @Field(() => Boolean, {nullable:true})
    label?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    options?: true;

    @Field(() => Boolean, {nullable:true})
    required?: true;

    @Field(() => Boolean, {nullable:true})
    placeholder?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
