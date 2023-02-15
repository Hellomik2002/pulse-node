import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class App_RoutingForms_FormCount {

    @Field(() => Int, {nullable:false})
    responses?: number;
}
