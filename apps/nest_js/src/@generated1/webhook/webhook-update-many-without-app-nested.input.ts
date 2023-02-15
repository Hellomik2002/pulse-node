import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WebhookCreateWithoutAppInput } from './webhook-create-without-app.input';
import { Type } from 'class-transformer';
import { WebhookCreateOrConnectWithoutAppInput } from './webhook-create-or-connect-without-app.input';
import { WebhookUpsertWithWhereUniqueWithoutAppInput } from './webhook-upsert-with-where-unique-without-app.input';
import { WebhookCreateManyAppInputEnvelope } from './webhook-create-many-app-input-envelope.input';
import { WebhookWhereUniqueInput } from './webhook-where-unique.input';
import { WebhookUpdateWithWhereUniqueWithoutAppInput } from './webhook-update-with-where-unique-without-app.input';
import { WebhookUpdateManyWithWhereWithoutAppInput } from './webhook-update-many-with-where-without-app.input';
import { WebhookScalarWhereInput } from './webhook-scalar-where.input';

@InputType()
export class WebhookUpdateManyWithoutAppNestedInput {

    @Field(() => [WebhookCreateWithoutAppInput], {nullable:true})
    @Type(() => WebhookCreateWithoutAppInput)
    create?: Array<WebhookCreateWithoutAppInput>;

    @Field(() => [WebhookCreateOrConnectWithoutAppInput], {nullable:true})
    @Type(() => WebhookCreateOrConnectWithoutAppInput)
    connectOrCreate?: Array<WebhookCreateOrConnectWithoutAppInput>;

    @Field(() => [WebhookUpsertWithWhereUniqueWithoutAppInput], {nullable:true})
    @Type(() => WebhookUpsertWithWhereUniqueWithoutAppInput)
    upsert?: Array<WebhookUpsertWithWhereUniqueWithoutAppInput>;

    @Field(() => WebhookCreateManyAppInputEnvelope, {nullable:true})
    @Type(() => WebhookCreateManyAppInputEnvelope)
    createMany?: WebhookCreateManyAppInputEnvelope;

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

    @Field(() => [WebhookUpdateWithWhereUniqueWithoutAppInput], {nullable:true})
    @Type(() => WebhookUpdateWithWhereUniqueWithoutAppInput)
    update?: Array<WebhookUpdateWithWhereUniqueWithoutAppInput>;

    @Field(() => [WebhookUpdateManyWithWhereWithoutAppInput], {nullable:true})
    @Type(() => WebhookUpdateManyWithWhereWithoutAppInput)
    updateMany?: Array<WebhookUpdateManyWithWhereWithoutAppInput>;

    @Field(() => [WebhookScalarWhereInput], {nullable:true})
    @Type(() => WebhookScalarWhereInput)
    deleteMany?: Array<WebhookScalarWhereInput>;
}
