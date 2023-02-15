import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { AppCategories } from '../prisma/app-categories.enum';
import { Credential } from '../credential/credential.model';
import { Webhook } from '../webhook/webhook.model';
import { ApiKey } from '../api-key/api-key.model';
import { AppCount } from './app-count.output';

@ObjectType()
export class App {

    @Field(() => ID, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    dirName!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    keys!: any | null;

    @Field(() => [AppCategories], {nullable:true})
    categories!: Array<keyof typeof AppCategories>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Credential], {nullable:true})
    credentials?: Array<Credential>;

    @Field(() => [Webhook], {nullable:true})
    Webhook?: Array<Webhook>;

    @Field(() => [ApiKey], {nullable:true})
    ApiKey?: Array<ApiKey>;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    enabled!: boolean;

    @Field(() => AppCount, {nullable:false})
    _count?: AppCount;
}
