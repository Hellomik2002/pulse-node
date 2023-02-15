import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ApiKeyCreateManyUserInput } from './api-key-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ApiKeyCreateManyUserInputEnvelope {

    @Field(() => [ApiKeyCreateManyUserInput], {nullable:false})
    @Type(() => ApiKeyCreateManyUserInput)
    data!: Array<ApiKeyCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
