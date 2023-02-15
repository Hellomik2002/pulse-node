import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ApiKeyCreateManyInput } from './api-key-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyApiKeyArgs {

    @Field(() => [ApiKeyCreateManyInput], {nullable:false})
    @Type(() => ApiKeyCreateManyInput)
    data!: Array<ApiKeyCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
