import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ApiKeyCreateWithoutUserInput } from './api-key-create-without-user.input';
import { Type } from 'class-transformer';
import { ApiKeyCreateOrConnectWithoutUserInput } from './api-key-create-or-connect-without-user.input';
import { ApiKeyUpsertWithWhereUniqueWithoutUserInput } from './api-key-upsert-with-where-unique-without-user.input';
import { ApiKeyCreateManyUserInputEnvelope } from './api-key-create-many-user-input-envelope.input';
import { ApiKeyWhereUniqueInput } from './api-key-where-unique.input';
import { ApiKeyUpdateWithWhereUniqueWithoutUserInput } from './api-key-update-with-where-unique-without-user.input';
import { ApiKeyUpdateManyWithWhereWithoutUserInput } from './api-key-update-many-with-where-without-user.input';
import { ApiKeyScalarWhereInput } from './api-key-scalar-where.input';

@InputType()
export class ApiKeyUpdateManyWithoutUserNestedInput {

    @Field(() => [ApiKeyCreateWithoutUserInput], {nullable:true})
    @Type(() => ApiKeyCreateWithoutUserInput)
    create?: Array<ApiKeyCreateWithoutUserInput>;

    @Field(() => [ApiKeyCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ApiKeyCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ApiKeyCreateOrConnectWithoutUserInput>;

    @Field(() => [ApiKeyUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ApiKeyUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ApiKeyUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ApiKeyCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ApiKeyCreateManyUserInputEnvelope)
    createMany?: ApiKeyCreateManyUserInputEnvelope;

    @Field(() => [ApiKeyWhereUniqueInput], {nullable:true})
    @Type(() => ApiKeyWhereUniqueInput)
    set?: Array<ApiKeyWhereUniqueInput>;

    @Field(() => [ApiKeyWhereUniqueInput], {nullable:true})
    @Type(() => ApiKeyWhereUniqueInput)
    disconnect?: Array<ApiKeyWhereUniqueInput>;

    @Field(() => [ApiKeyWhereUniqueInput], {nullable:true})
    @Type(() => ApiKeyWhereUniqueInput)
    delete?: Array<ApiKeyWhereUniqueInput>;

    @Field(() => [ApiKeyWhereUniqueInput], {nullable:true})
    @Type(() => ApiKeyWhereUniqueInput)
    connect?: Array<ApiKeyWhereUniqueInput>;

    @Field(() => [ApiKeyUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ApiKeyUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ApiKeyUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ApiKeyUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ApiKeyUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ApiKeyUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ApiKeyScalarWhereInput], {nullable:true})
    @Type(() => ApiKeyScalarWhereInput)
    deleteMany?: Array<ApiKeyScalarWhereInput>;
}
