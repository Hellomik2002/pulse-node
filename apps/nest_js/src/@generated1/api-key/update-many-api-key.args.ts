import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ApiKeyUpdateManyMutationInput } from './api-key-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ApiKeyWhereInput } from './api-key-where.input';

@ArgsType()
export class UpdateManyApiKeyArgs {

    @Field(() => ApiKeyUpdateManyMutationInput, {nullable:false})
    @Type(() => ApiKeyUpdateManyMutationInput)
    data!: ApiKeyUpdateManyMutationInput;

    @Field(() => ApiKeyWhereInput, {nullable:true})
    @Type(() => ApiKeyWhereInput)
    where?: ApiKeyWhereInput;
}
