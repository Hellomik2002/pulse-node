import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ApiKeyWhereInput } from './api-key-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyApiKeyArgs {

    @Field(() => ApiKeyWhereInput, {nullable:true})
    @Type(() => ApiKeyWhereInput)
    where?: ApiKeyWhereInput;
}
