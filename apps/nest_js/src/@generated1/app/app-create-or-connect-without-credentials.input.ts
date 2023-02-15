import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppWhereUniqueInput } from './app-where-unique.input';
import { Type } from 'class-transformer';
import { AppCreateWithoutCredentialsInput } from './app-create-without-credentials.input';

@InputType()
export class AppCreateOrConnectWithoutCredentialsInput {

    @Field(() => AppWhereUniqueInput, {nullable:false})
    @Type(() => AppWhereUniqueInput)
    where!: AppWhereUniqueInput;

    @Field(() => AppCreateWithoutCredentialsInput, {nullable:false})
    @Type(() => AppCreateWithoutCredentialsInput)
    create!: AppCreateWithoutCredentialsInput;
}
