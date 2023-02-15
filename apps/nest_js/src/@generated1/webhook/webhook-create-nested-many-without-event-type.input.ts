import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WebhookCreateWithoutEventTypeInput } from './webhook-create-without-event-type.input';
import { Type } from 'class-transformer';
import { WebhookCreateOrConnectWithoutEventTypeInput } from './webhook-create-or-connect-without-event-type.input';
import { WebhookCreateManyEventTypeInputEnvelope } from './webhook-create-many-event-type-input-envelope.input';
import { WebhookWhereUniqueInput } from './webhook-where-unique.input';

@InputType()
export class WebhookCreateNestedManyWithoutEventTypeInput {

    @Field(() => [WebhookCreateWithoutEventTypeInput], {nullable:true})
    @Type(() => WebhookCreateWithoutEventTypeInput)
    create?: Array<WebhookCreateWithoutEventTypeInput>;

    @Field(() => [WebhookCreateOrConnectWithoutEventTypeInput], {nullable:true})
    @Type(() => WebhookCreateOrConnectWithoutEventTypeInput)
    connectOrCreate?: Array<WebhookCreateOrConnectWithoutEventTypeInput>;

    @Field(() => WebhookCreateManyEventTypeInputEnvelope, {nullable:true})
    @Type(() => WebhookCreateManyEventTypeInputEnvelope)
    createMany?: WebhookCreateManyEventTypeInputEnvelope;

    @Field(() => [WebhookWhereUniqueInput], {nullable:true})
    @Type(() => WebhookWhereUniqueInput)
    connect?: Array<WebhookWhereUniqueInput>;
}
