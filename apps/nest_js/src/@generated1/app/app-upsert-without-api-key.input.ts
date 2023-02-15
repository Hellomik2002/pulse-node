import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppUpdateWithoutApiKeyInput } from './app-update-without-api-key.input';
import { Type } from 'class-transformer';
import { AppCreateWithoutApiKeyInput } from './app-create-without-api-key.input';

@InputType()
export class AppUpsertWithoutApiKeyInput {

    @Field(() => AppUpdateWithoutApiKeyInput, {nullable:false})
    @Type(() => AppUpdateWithoutApiKeyInput)
    update!: AppUpdateWithoutApiKeyInput;

    @Field(() => AppCreateWithoutApiKeyInput, {nullable:false})
    @Type(() => AppCreateWithoutApiKeyInput)
    create!: AppCreateWithoutApiKeyInput;
}
