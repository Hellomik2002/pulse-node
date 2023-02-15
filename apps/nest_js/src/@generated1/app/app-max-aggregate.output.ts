import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AppMaxAggregate {

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => String, {nullable:true})
    dirName?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;
}
