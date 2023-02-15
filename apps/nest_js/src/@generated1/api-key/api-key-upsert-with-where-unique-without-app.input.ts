import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ApiKeyWhereUniqueInput } from './api-key-where-unique.input';
import { Type } from 'class-transformer';
import { ApiKeyUpdateWithoutAppInput } from './api-key-update-without-app.input';
import { ApiKeyCreateWithoutAppInput } from './api-key-create-without-app.input';

@InputType()
export class ApiKeyUpsertWithWhereUniqueWithoutAppInput {

    @Field(() => ApiKeyWhereUniqueInput, {nullable:false})
    @Type(() => ApiKeyWhereUniqueInput)
    where!: ApiKeyWhereUniqueInput;

    @Field(() => ApiKeyUpdateWithoutAppInput, {nullable:false})
    @Type(() => ApiKeyUpdateWithoutAppInput)
    update!: ApiKeyUpdateWithoutAppInput;

    @Field(() => ApiKeyCreateWithoutAppInput, {nullable:false})
    @Type(() => ApiKeyCreateWithoutAppInput)
    create!: ApiKeyCreateWithoutAppInput;
}
