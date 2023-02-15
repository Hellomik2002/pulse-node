import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ApiKeyCreateWithoutAppInput } from './api-key-create-without-app.input';
import { Type } from 'class-transformer';
import { ApiKeyCreateOrConnectWithoutAppInput } from './api-key-create-or-connect-without-app.input';
import { ApiKeyUpsertWithWhereUniqueWithoutAppInput } from './api-key-upsert-with-where-unique-without-app.input';
import { ApiKeyCreateManyAppInputEnvelope } from './api-key-create-many-app-input-envelope.input';
import { ApiKeyWhereUniqueInput } from './api-key-where-unique.input';
import { ApiKeyUpdateWithWhereUniqueWithoutAppInput } from './api-key-update-with-where-unique-without-app.input';
import { ApiKeyUpdateManyWithWhereWithoutAppInput } from './api-key-update-many-with-where-without-app.input';
import { ApiKeyScalarWhereInput } from './api-key-scalar-where.input';

@InputType()
export class ApiKeyUpdateManyWithoutAppNestedInput {

    @Field(() => [ApiKeyCreateWithoutAppInput], {nullable:true})
    @Type(() => ApiKeyCreateWithoutAppInput)
    create?: Array<ApiKeyCreateWithoutAppInput>;

    @Field(() => [ApiKeyCreateOrConnectWithoutAppInput], {nullable:true})
    @Type(() => ApiKeyCreateOrConnectWithoutAppInput)
    connectOrCreate?: Array<ApiKeyCreateOrConnectWithoutAppInput>;

    @Field(() => [ApiKeyUpsertWithWhereUniqueWithoutAppInput], {nullable:true})
    @Type(() => ApiKeyUpsertWithWhereUniqueWithoutAppInput)
    upsert?: Array<ApiKeyUpsertWithWhereUniqueWithoutAppInput>;

    @Field(() => ApiKeyCreateManyAppInputEnvelope, {nullable:true})
    @Type(() => ApiKeyCreateManyAppInputEnvelope)
    createMany?: ApiKeyCreateManyAppInputEnvelope;

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

    @Field(() => [ApiKeyUpdateWithWhereUniqueWithoutAppInput], {nullable:true})
    @Type(() => ApiKeyUpdateWithWhereUniqueWithoutAppInput)
    update?: Array<ApiKeyUpdateWithWhereUniqueWithoutAppInput>;

    @Field(() => [ApiKeyUpdateManyWithWhereWithoutAppInput], {nullable:true})
    @Type(() => ApiKeyUpdateManyWithWhereWithoutAppInput)
    updateMany?: Array<ApiKeyUpdateManyWithWhereWithoutAppInput>;

    @Field(() => [ApiKeyScalarWhereInput], {nullable:true})
    @Type(() => ApiKeyScalarWhereInput)
    deleteMany?: Array<ApiKeyScalarWhereInput>;
}
