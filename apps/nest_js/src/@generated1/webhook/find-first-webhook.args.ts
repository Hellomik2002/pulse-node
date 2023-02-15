import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WebhookWhereInput } from './webhook-where.input';
import { Type } from 'class-transformer';
import { WebhookOrderByWithRelationInput } from './webhook-order-by-with-relation.input';
import { WebhookWhereUniqueInput } from './webhook-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WebhookScalarFieldEnum } from './webhook-scalar-field.enum';

@ArgsType()
export class FindFirstWebhookArgs {

    @Field(() => WebhookWhereInput, {nullable:true})
    @Type(() => WebhookWhereInput)
    where?: WebhookWhereInput;

    @Field(() => [WebhookOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WebhookOrderByWithRelationInput>;

    @Field(() => WebhookWhereUniqueInput, {nullable:true})
    cursor?: WebhookWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [WebhookScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof WebhookScalarFieldEnum>;
}
