import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WebhookCreateWithoutEventTypeInput } from './webhook-create-without-event-type.input';
import { Type } from 'class-transformer';
import { WebhookCreateOrConnectWithoutEventTypeInput } from './webhook-create-or-connect-without-event-type.input';
import { WebhookUpsertWithWhereUniqueWithoutEventTypeInput } from './webhook-upsert-with-where-unique-without-event-type.input';
import { WebhookCreateManyEventTypeInputEnvelope } from './webhook-create-many-event-type-input-envelope.input';
import { WebhookWhereUniqueInput } from './webhook-where-unique.input';
import { WebhookUpdateWithWhereUniqueWithoutEventTypeInput } from './webhook-update-with-where-unique-without-event-type.input';
import { WebhookUpdateManyWithWhereWithoutEventTypeInput } from './webhook-update-many-with-where-without-event-type.input';
import { WebhookScalarWhereInput } from './webhook-scalar-where.input';

@InputType()
export class WebhookUpdateManyWithoutEventTypeNestedInput {

    @Field(() => [WebhookCreateWithoutEventTypeInput], {nullable:true})
    @Type(() => WebhookCreateWithoutEventTypeInput)
    create?: Array<WebhookCreateWithoutEventTypeInput>;

    @Field(() => [WebhookCreateOrConnectWithoutEventTypeInput], {nullable:true})
    @Type(() => WebhookCreateOrConnectWithoutEventTypeInput)
    connectOrCreate?: Array<WebhookCreateOrConnectWithoutEventTypeInput>;

    @Field(() => [WebhookUpsertWithWhereUniqueWithoutEventTypeInput], {nullable:true})
    @Type(() => WebhookUpsertWithWhereUniqueWithoutEventTypeInput)
    upsert?: Array<WebhookUpsertWithWhereUniqueWithoutEventTypeInput>;

    @Field(() => WebhookCreateManyEventTypeInputEnvelope, {nullable:true})
    @Type(() => WebhookCreateManyEventTypeInputEnvelope)
    createMany?: WebhookCreateManyEventTypeInputEnvelope;

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

    @Field(() => [WebhookUpdateWithWhereUniqueWithoutEventTypeInput], {nullable:true})
    @Type(() => WebhookUpdateWithWhereUniqueWithoutEventTypeInput)
    update?: Array<WebhookUpdateWithWhereUniqueWithoutEventTypeInput>;

    @Field(() => [WebhookUpdateManyWithWhereWithoutEventTypeInput], {nullable:true})
    @Type(() => WebhookUpdateManyWithWhereWithoutEventTypeInput)
    updateMany?: Array<WebhookUpdateManyWithWhereWithoutEventTypeInput>;

    @Field(() => [WebhookScalarWhereInput], {nullable:true})
    @Type(() => WebhookScalarWhereInput)
    deleteMany?: Array<WebhookScalarWhereInput>;
}
