import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { AppCreatecategoriesInput } from './app-createcategories.input';
import { WebhookUncheckedCreateNestedManyWithoutAppInput } from '../webhook/webhook-unchecked-create-nested-many-without-app.input';
import { ApiKeyUncheckedCreateNestedManyWithoutAppInput } from '../api-key/api-key-unchecked-create-nested-many-without-app.input';

@InputType()
export class AppUncheckedCreateWithoutCredentialsInput {

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

    @Field(() => WebhookUncheckedCreateNestedManyWithoutAppInput, {nullable:true})
    Webhook?: WebhookUncheckedCreateNestedManyWithoutAppInput;

    @Field(() => ApiKeyUncheckedCreateNestedManyWithoutAppInput, {nullable:true})
    ApiKey?: ApiKeyUncheckedCreateNestedManyWithoutAppInput;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;
}
