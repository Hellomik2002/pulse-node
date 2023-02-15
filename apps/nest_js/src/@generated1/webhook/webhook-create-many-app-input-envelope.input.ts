import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WebhookCreateManyAppInput } from './webhook-create-many-app.input';
import { Type } from 'class-transformer';

@InputType()
export class WebhookCreateManyAppInputEnvelope {

    @Field(() => [WebhookCreateManyAppInput], {nullable:false})
    @Type(() => WebhookCreateManyAppInput)
    data!: Array<WebhookCreateManyAppInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
