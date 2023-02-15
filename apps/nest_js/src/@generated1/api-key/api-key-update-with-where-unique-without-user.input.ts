import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ApiKeyWhereUniqueInput } from './api-key-where-unique.input';
import { Type } from 'class-transformer';
import { ApiKeyUpdateWithoutUserInput } from './api-key-update-without-user.input';

@InputType()
export class ApiKeyUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ApiKeyWhereUniqueInput, {nullable:false})
    @Type(() => ApiKeyWhereUniqueInput)
    where!: ApiKeyWhereUniqueInput;

    @Field(() => ApiKeyUpdateWithoutUserInput, {nullable:false})
    @Type(() => ApiKeyUpdateWithoutUserInput)
    data!: ApiKeyUpdateWithoutUserInput;
}
