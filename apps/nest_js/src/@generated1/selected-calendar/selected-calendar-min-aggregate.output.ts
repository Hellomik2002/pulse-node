import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SelectedCalendarMinAggregate {

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => String, {nullable:true})
    integration?: string;

    @Field(() => String, {nullable:true})
    externalId?: string;
}
