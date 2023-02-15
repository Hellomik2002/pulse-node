import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WebhookCreateWithoutUserInput } from './webhook-create-without-user.input';
import { Type } from 'class-transformer';
import { WebhookCreateOrConnectWithoutUserInput } from './webhook-create-or-connect-without-user.input';
import { WebhookUpsertWithWhereUniqueWithoutUserInput } from './webhook-upsert-with-where-unique-without-user.input';
import { WebhookCreateManyUserInputEnvelope } from './webhook-create-many-user-input-envelope.input';
import { WebhookWhereUniqueInput } from './webhook-where-unique.input';
import { WebhookUpdateWithWhereUniqueWithoutUserInput } from './webhook-update-with-where-unique-without-user.input';
import { WebhookUpdateManyWithWhereWithoutUserInput } from './webhook-update-many-with-where-without-user.input';
import { WebhookScalarWhereInput } from './webhook-scalar-where.input';

@InputType()
export class WebhookUpdateManyWithoutUserNestedInput {

    @Field(() => [WebhookCreateWithoutUserInput], {nullable:true})
    @Type(() => WebhookCreateWithoutUserInput)
    create?: Array<WebhookCreateWithoutUserInput>;

    @Field(() => [WebhookCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => WebhookCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<WebhookCreateOrConnectWithoutUserInput>;

    @Field(() => [WebhookUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => WebhookUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<WebhookUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => WebhookCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => WebhookCreateManyUserInputEnvelope)
    createMany?: WebhookCreateManyUserInputEnvelope;

    @Field(() => [WebhookWhereUniqueInput], {nullable:true})
    @Type(() => WebhookWhereUniqueInput)
    set?: Array<WebhookWhereUniqueInput>;

    @Field(() => [WebhookWhereUniqueInput], {nullable:true})
    @Type(() => WebhookWhereUniqueInput)
    disconnect?: Array<WebhookWhereUniqueInput>;

    @Field(() => [WebhookWhereUniqueInput], {nullable:true})
    @Type(() => WebhookWhereUniqueInput)
    delete?: Array<WebhookWhereUniqueInput>;

    @Field(() => [WebhookWhereUniqueInput], {nullable:true})
    @Type(() => WebhookWhereUniqueInput)
    connect?: Array<WebhookWhereUniqueInput>;

    @Field(() => [WebhookUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => WebhookUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<WebhookUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [WebhookUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => WebhookUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<WebhookUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [WebhookScalarWhereInput], {nullable:true})
    @Type(() => WebhookScalarWhereInput)
    deleteMany?: Array<WebhookScalarWhereInput>;
}
