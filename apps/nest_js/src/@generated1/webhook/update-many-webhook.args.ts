import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WebhookUpdateManyMutationInput } from './webhook-update-many-mutation.input';
import { Type } from 'class-transformer';
import { WebhookWhereInput } from './webhook-where.input';

@ArgsType()
export class UpdateManyWebhookArgs {

    @Field(() => WebhookUpdateManyMutationInput, {nullable:false})
    @Type(() => WebhookUpdateManyMutationInput)
    data!: WebhookUpdateManyMutationInput;

    @Field(() => WebhookWhereInput, {nullable:true})
    @Type(() => WebhookWhereInput)
    where?: WebhookWhereInput;
}
