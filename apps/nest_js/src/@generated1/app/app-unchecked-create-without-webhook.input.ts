import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { AppCreatecategoriesInput } from './app-createcategories.input';
import { CredentialUncheckedCreateNestedManyWithoutAppInput } from '../credential/credential-unchecked-create-nested-many-without-app.input';
import { ApiKeyUncheckedCreateNestedManyWithoutAppInput } from '../api-key/api-key-unchecked-create-nested-many-without-app.input';

@InputType()
export class AppUncheckedCreateWithoutWebhookInput {

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

    @Field(() => CredentialUncheckedCreateNestedManyWithoutAppInput, {nullable:true})
    credentials?: CredentialUncheckedCreateNestedManyWithoutAppInput;

    @Field(() => ApiKeyUncheckedCreateNestedManyWithoutAppInput, {nullable:true})
    ApiKey?: ApiKeyUncheckedCreateNestedManyWithoutAppInput;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;
}
