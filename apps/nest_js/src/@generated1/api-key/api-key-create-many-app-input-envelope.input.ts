import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ApiKeyCreateManyAppInput } from './api-key-create-many-app.input';
import { Type } from 'class-transformer';

@InputType()
export class ApiKeyCreateManyAppInputEnvelope {

    @Field(() => [ApiKeyCreateManyAppInput], {nullable:false})
    @Type(() => ApiKeyCreateManyAppInput)
    data!: Array<ApiKeyCreateManyAppInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
