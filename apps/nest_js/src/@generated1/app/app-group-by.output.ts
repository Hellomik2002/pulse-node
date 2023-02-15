import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { AppCategories } from '../prisma/app-categories.enum';
import { AppCountAggregate } from './app-count-aggregate.output';
import { AppMinAggregate } from './app-min-aggregate.output';
import { AppMaxAggregate } from './app-max-aggregate.output';

@ObjectType()
export class AppGroupBy {

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    dirName!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    keys?: any;

    @Field(() => [AppCategories], {nullable:true})
    categories?: Array<keyof typeof AppCategories>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Boolean, {nullable:false})
    enabled!: boolean;

    @Field(() => AppCountAggregate, {nullable:true})
    _count?: AppCountAggregate;

    @Field(() => AppMinAggregate, {nullable:true})
    _min?: AppMinAggregate;

    @Field(() => AppMaxAggregate, {nullable:true})
    _max?: AppMaxAggregate;
}
