import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ApiKeyCreateInput } from './api-key-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneApiKeyArgs {

    @Field(() => ApiKeyCreateInput, {nullable:false})
    @Type(() => ApiKeyCreateInput)
    data!: ApiKeyCreateInput;
}
