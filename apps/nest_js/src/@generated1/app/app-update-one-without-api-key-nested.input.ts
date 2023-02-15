import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppCreateWithoutApiKeyInput } from './app-create-without-api-key.input';
import { Type } from 'class-transformer';
import { AppCreateOrConnectWithoutApiKeyInput } from './app-create-or-connect-without-api-key.input';
import { AppUpsertWithoutApiKeyInput } from './app-upsert-without-api-key.input';
import { AppWhereUniqueInput } from './app-where-unique.input';
import { AppUpdateWithoutApiKeyInput } from './app-update-without-api-key.input';

@InputType()
export class AppUpdateOneWithoutApiKeyNestedInput {

    @Field(() => AppCreateWithoutApiKeyInput, {nullable:true})
    @Type(() => AppCreateWithoutApiKeyInput)
    create?: AppCreateWithoutApiKeyInput;

    @Field(() => AppCreateOrConnectWithoutApiKeyInput, {nullable:true})
    @Type(() => AppCreateOrConnectWithoutApiKeyInput)
    connectOrCreate?: AppCreateOrConnectWithoutApiKeyInput;

    @Field(() => AppUpsertWithoutApiKeyInput, {nullable:true})
    @Type(() => AppUpsertWithoutApiKeyInput)
    upsert?: AppUpsertWithoutApiKeyInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => AppWhereUniqueInput, {nullable:true})
    @Type(() => AppWhereUniqueInput)
    connect?: AppWhereUniqueInput;

    @Field(() => AppUpdateWithoutApiKeyInput, {nullable:true})
    @Type(() => AppUpdateWithoutApiKeyInput)
    update?: AppUpdateWithoutApiKeyInput;
}
