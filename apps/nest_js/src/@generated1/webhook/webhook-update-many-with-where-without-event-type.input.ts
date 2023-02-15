import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WebhookScalarWhereInput } from './webhook-scalar-where.input';
import { Type } from 'class-transformer';
import { WebhookUpdateManyMutationInput } from './webhook-update-many-mutation.input';

@InputType()
export class WebhookUpdateManyWithWhereWithoutEventTypeInput {

    @Field(() => WebhookScalarWhereInput, {nullable:false})
    @Type(() => WebhookScalarWhereInput)
    where!: WebhookScalarWhereInput;

    @Field(() => WebhookUpdateManyMutationInput, {nullable:false})
    @Type(() => WebhookUpdateManyMutationInput)
    data!: WebhookUpdateManyMutationInput;
}
