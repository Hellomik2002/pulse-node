import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CredentialOrderByRelationAggregateInput } from '../credential/credential-order-by-relation-aggregate.input';
import { WebhookOrderByRelationAggregateInput } from '../webhook/webhook-order-by-relation-aggregate.input';
import { ApiKeyOrderByRelationAggregateInput } from '../api-key/api-key-order-by-relation-aggregate.input';

@InputType()
export class AppOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dirName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    keys?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    categories?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => CredentialOrderByRelationAggregateInput, {nullable:true})
    credentials?: CredentialOrderByRelationAggregateInput;

    @Field(() => WebhookOrderByRelationAggregateInput, {nullable:true})
    Webhook?: WebhookOrderByRelationAggregateInput;

    @Field(() => ApiKeyOrderByRelationAggregateInput, {nullable:true})
    ApiKey?: ApiKeyOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;
}
