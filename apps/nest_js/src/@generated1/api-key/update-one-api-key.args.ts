import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ApiKeyUpdateInput } from './api-key-update.input';
import { Type } from 'class-transformer';
import { ApiKeyWhereUniqueInput } from './api-key-where-unique.input';

@ArgsType()
export class UpdateOneApiKeyArgs {

    @Field(() => ApiKeyUpdateInput, {nullable:false})
    @Type(() => ApiKeyUpdateInput)
    data!: ApiKeyUpdateInput;

    @Field(() => ApiKeyWhereUniqueInput, {nullable:false})
    @Type(() => ApiKeyWhereUniqueInput)
    where!: ApiKeyWhereUniqueInput;
}
