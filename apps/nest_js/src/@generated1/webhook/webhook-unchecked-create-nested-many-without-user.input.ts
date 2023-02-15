import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WebhookCreateWithoutUserInput } from './webhook-create-without-user.input';
import { Type } from 'class-transformer';
import { WebhookCreateOrConnectWithoutUserInput } from './webhook-create-or-connect-without-user.input';
import { WebhookCreateManyUserInputEnvelope } from './webhook-create-many-user-input-envelope.input';
import { WebhookWhereUniqueInput } from './webhook-where-unique.input';

@InputType()
export class WebhookUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [WebhookCreateWithoutUserInput], {nullable:true})
    @Type(() => WebhookCreateWithoutUserInput)
    create?: Array<WebhookCreateWithoutUserInput>;

    @Field(() => [WebhookCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => WebhookCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<WebhookCreateOrConnectWithoutUserInput>;

    @Field(() => WebhookCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => WebhookCreateManyUserInputEnvelope)
    createMany?: WebhookCreateManyUserInputEnvelope;

    @Field(() => [WebhookWhereUniqueInput], {nullable:true})
    @Type(() => WebhookWhereUniqueInput)
    connect?: Array<WebhookWhereUniqueInput>;
}
