import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class App_RoutingForms_FormAvgAggregate {

    @Field(() => Float, {nullable:true})
    userId?: number;
}
