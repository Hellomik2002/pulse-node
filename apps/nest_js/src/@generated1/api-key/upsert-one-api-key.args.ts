import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ApiKeyWhereUniqueInput } from './api-key-where-unique.input';
import { Type } from 'class-transformer';
import { ApiKeyCreateInput } from './api-key-create.input';
import { ApiKeyUpdateInput } from './api-key-update.input';

@ArgsType()
export class UpsertOneApiKeyArgs {

    @Field(() => ApiKeyWhereUniqueInput, {nullable:false})
    @Type(() => ApiKeyWhereUniqueInput)
    where!: ApiKeyWhereUniqueInput;

    @Field(() => ApiKeyCreateInput, {nullable:false})
    @Type(() => ApiKeyCreateInput)
    create!: ApiKeyCreateInput;

    @Field(() => ApiKeyUpdateInput, {nullable:false})
    @Type(() => ApiKeyUpdateInput)
    update!: ApiKeyUpdateInput;
}
