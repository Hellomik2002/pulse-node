import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class WorkflowCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    trigger?: true;

    @Field(() => Boolean, {nullable:true})
    time?: true;

    @Field(() => Boolean, {nullable:true})
    timeUnit?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
