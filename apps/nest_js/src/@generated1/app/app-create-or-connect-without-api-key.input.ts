import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppWhereUniqueInput } from './app-where-unique.input';
import { Type } from 'class-transformer';
import { AppCreateWithoutApiKeyInput } from './app-create-without-api-key.input';

@InputType()
export class AppCreateOrConnectWithoutApiKeyInput {

    @Field(() => AppWhereUniqueInput, {nullable:false})
    @Type(() => AppWhereUniqueInput)
    where!: AppWhereUniqueInput;

    @Field(() => AppCreateWithoutApiKeyInput, {nullable:false})
    @Type(() => AppCreateWithoutApiKeyInput)
    create!: AppCreateWithoutApiKeyInput;
}
