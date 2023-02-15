import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ApiKeyCreateWithoutAppInput } from './api-key-create-without-app.input';
import { Type } from 'class-transformer';
import { ApiKeyCreateOrConnectWithoutAppInput } from './api-key-create-or-connect-without-app.input';
import { ApiKeyCreateManyAppInputEnvelope } from './api-key-create-many-app-input-envelope.input';
import { ApiKeyWhereUniqueInput } from './api-key-where-unique.input';

@InputType()
export class ApiKeyCreateNestedManyWithoutAppInput {

    @Field(() => [ApiKeyCreateWithoutAppInput], {nullable:true})
    @Type(() => ApiKeyCreateWithoutAppInput)
    create?: Array<ApiKeyCreateWithoutAppInput>;

    @Field(() => [ApiKeyCreateOrConnectWithoutAppInput], {nullable:true})
    @Type(() => ApiKeyCreateOrConnectWithoutAppInput)
    connectOrCreate?: Array<ApiKeyCreateOrConnectWithoutAppInput>;

    @Field(() => ApiKeyCreateManyAppInputEnvelope, {nullable:true})
    @Type(() => ApiKeyCreateManyAppInputEnvelope)
    createMany?: ApiKeyCreateManyAppInputEnvelope;

    @Field(() => [ApiKeyWhereUniqueInput], {nullable:true})
    @Type(() => ApiKeyWhereUniqueInput)
    connect?: Array<ApiKeyWhereUniqueInput>;
}
