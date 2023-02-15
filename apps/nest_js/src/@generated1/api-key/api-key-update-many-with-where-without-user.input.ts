import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ApiKeyScalarWhereInput } from './api-key-scalar-where.input';
import { Type } from 'class-transformer';
import { ApiKeyUpdateManyMutationInput } from './api-key-update-many-mutation.input';

@InputType()
export class ApiKeyUpdateManyWithWhereWithoutUserInput {

    @Field(() => ApiKeyScalarWhereInput, {nullable:false})
    @Type(() => ApiKeyScalarWhereInput)
    where!: ApiKeyScalarWhereInput;

    @Field(() => ApiKeyUpdateManyMutationInput, {nullable:false})
    @Type(() => ApiKeyUpdateManyMutationInput)
    data!: ApiKeyUpdateManyMutationInput;
}
