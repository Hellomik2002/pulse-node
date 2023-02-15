import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppUpdateWithoutCredentialsInput } from './app-update-without-credentials.input';
import { Type } from 'class-transformer';
import { AppCreateWithoutCredentialsInput } from './app-create-without-credentials.input';

@InputType()
export class AppUpsertWithoutCredentialsInput {

    @Field(() => AppUpdateWithoutCredentialsInput, {nullable:false})
    @Type(() => AppUpdateWithoutCredentialsInput)
    update!: AppUpdateWithoutCredentialsInput;

    @Field(() => AppCreateWithoutCredentialsInput, {nullable:false})
    @Type(() => AppCreateWithoutCredentialsInput)
    create!: AppCreateWithoutCredentialsInput;
}
