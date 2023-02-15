import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class App_RoutingForms_FormResponseMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    formFillerId?: string;

    @Field(() => String, {nullable:true})
    formId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
