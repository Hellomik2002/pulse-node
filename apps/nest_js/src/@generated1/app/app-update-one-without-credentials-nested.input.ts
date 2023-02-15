import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppCreateWithoutCredentialsInput } from './app-create-without-credentials.input';
import { Type } from 'class-transformer';
import { AppCreateOrConnectWithoutCredentialsInput } from './app-create-or-connect-without-credentials.input';
import { AppUpsertWithoutCredentialsInput } from './app-upsert-without-credentials.input';
import { AppWhereUniqueInput } from './app-where-unique.input';
import { AppUpdateWithoutCredentialsInput } from './app-update-without-credentials.input';

@InputType()
export class AppUpdateOneWithoutCredentialsNestedInput {

    @Field(() => AppCreateWithoutCredentialsInput, {nullable:true})
    @Type(() => AppCreateWithoutCredentialsInput)
    create?: AppCreateWithoutCredentialsInput;

    @Field(() => AppCreateOrConnectWithoutCredentialsInput, {nullable:true})
    @Type(() => AppCreateOrConnectWithoutCredentialsInput)
    connectOrCreate?: AppCreateOrConnectWithoutCredentialsInput;

    @Field(() => AppUpsertWithoutCredentialsInput, {nullable:true})
    @Type(() => AppUpsertWithoutCredentialsInput)
    upsert?: AppUpsertWithoutCredentialsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => AppWhereUniqueInput, {nullable:true})
    @Type(() => AppWhereUniqueInput)
    connect?: AppWhereUniqueInput;

    @Field(() => AppUpdateWithoutCredentialsInput, {nullable:true})
    @Type(() => AppUpdateWithoutCredentialsInput)
    update?: AppUpdateWithoutCredentialsInput;
}
