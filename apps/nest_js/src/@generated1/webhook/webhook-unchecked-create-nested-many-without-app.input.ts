import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WebhookCreateWithoutAppInput } from './webhook-create-without-app.input';
import { Type } from 'class-transformer';
import { WebhookCreateOrConnectWithoutAppInput } from './webhook-create-or-connect-without-app.input';
import { WebhookCreateManyAppInputEnvelope } from './webhook-create-many-app-input-envelope.input';
import { WebhookWhereUniqueInput } from './webhook-where-unique.input';

@InputType()
export class WebhookUncheckedCreateNestedManyWithoutAppInput {

    @Field(() => [WebhookCreateWithoutAppInput], {nullable:true})
    @Type(() => WebhookCreateWithoutAppInput)
    create?: Array<WebhookCreateWithoutAppInput>;

    @Field(() => [WebhookCreateOrConnectWithoutAppInput], {nullable:true})
    @Type(() => WebhookCreateOrConnectWithoutAppInput)
    connectOrCreate?: Array<WebhookCreateOrConnectWithoutAppInput>;

    @Field(() => WebhookCreateManyAppInputEnvelope, {nullable:true})
    @Type(() => WebhookCreateManyAppInputEnvelope)
    createMany?: WebhookCreateManyAppInputEnvelope;

    @Field(() => [WebhookWhereUniqueInput], {nullable:true})
    @Type(() => WebhookWhereUniqueInput)
    connect?: Array<WebhookWhereUniqueInput>;
}
