import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WebhookCreateManyEventTypeInput } from './webhook-create-many-event-type.input';
import { Type } from 'class-transformer';

@InputType()
export class WebhookCreateManyEventTypeInputEnvelope {

    @Field(() => [WebhookCreateManyEventTypeInput], {nullable:false})
    @Type(() => WebhookCreateManyEventTypeInput)
    data!: Array<WebhookCreateManyEventTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
