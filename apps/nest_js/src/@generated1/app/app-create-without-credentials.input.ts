import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { AppCreatecategoriesInput } from './app-createcategories.input';
import { WebhookCreateNestedManyWithoutAppInput } from '../webhook/webhook-create-nested-many-without-app.input';
import { ApiKeyCreateNestedManyWithoutAppInput } from '../api-key/api-key-create-nested-many-without-app.input';

@InputType()
export class AppCreateWithoutCredentialsInput {

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    dirName!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    keys?: any;

    @Field(() => AppCreatecategoriesInput, {nullable:true})
    categories?: AppCreatecategoriesInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => WebhookCreateNestedManyWithoutAppInput, {nullable:true})
    Webhook?: WebhookCreateNestedManyWithoutAppInput;

    @Field(() => ApiKeyCreateNestedManyWithoutAppInput, {nullable:true})
    ApiKey?: ApiKeyCreateNestedManyWithoutAppInput;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;
}
