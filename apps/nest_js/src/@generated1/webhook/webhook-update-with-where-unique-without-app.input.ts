import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WebhookWhereUniqueInput } from './webhook-where-unique.input';
import { Type } from 'class-transformer';
import { WebhookUpdateWithoutAppInput } from './webhook-update-without-app.input';

@InputType()
export class WebhookUpdateWithWhereUniqueWithoutAppInput {

    @Field(() => WebhookWhereUniqueInput, {nullable:false})
    @Type(() => WebhookWhereUniqueInput)
    where!: WebhookWhereUniqueInput;

    @Field(() => WebhookUpdateWithoutAppInput, {nullable:false})
    @Type(() => WebhookUpdateWithoutAppInput)
    data!: WebhookUpdateWithoutAppInput;
}
