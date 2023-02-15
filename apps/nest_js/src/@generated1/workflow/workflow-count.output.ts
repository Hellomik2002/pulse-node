import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class WorkflowCount {

    @Field(() => Int, {nullable:false})
    activeOn?: number;

    @Field(() => Int, {nullable:false})
    steps?: number;
}
