import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class App_RoutingForms_FormResponseAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;
}
