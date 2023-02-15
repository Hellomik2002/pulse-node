import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ApiKeyWhereUniqueInput } from './api-key-where-unique.input';
import { Type } from 'class-transformer';
import { ApiKeyUpdateWithoutUserInput } from './api-key-update-without-user.input';
import { ApiKeyCreateWithoutUserInput } from './api-key-create-without-user.input';

@InputType()
export class ApiKeyUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ApiKeyWhereUniqueInput, {nullable:false})
    @Type(() => ApiKeyWhereUniqueInput)
    where!: ApiKeyWhereUniqueInput;

    @Field(() => ApiKeyUpdateWithoutUserInput, {nullable:false})
    @Type(() => ApiKeyUpdateWithoutUserInput)
    update!: ApiKeyUpdateWithoutUserInput;

    @Field(() => ApiKeyCreateWithoutUserInput, {nullable:false})
    @Type(() => ApiKeyCreateWithoutUserInput)
    create!: ApiKeyCreateWithoutUserInput;
}
