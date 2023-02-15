import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypeCustomInputWhereInput } from './event-type-custom-input-where.input';
import { Type } from 'class-transformer';
import { EventTypeCustomInputOrderByWithRelationInput } from './event-type-custom-input-order-by-with-relation.input';
import { EventTypeCustomInputWhereUniqueInput } from './event-type-custom-input-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EventTypeCustomInputScalarFieldEnum } from './event-type-custom-input-scalar-field.enum';

@ArgsType()
export class FindFirstEventTypeCustomInputArgs {

    @Field(() => EventTypeCustomInputWhereInput, {nullable:true})
    @Type(() => EventTypeCustomInputWhereInput)
    where?: EventTypeCustomInputWhereInput;

    @Field(() => [EventTypeCustomInputOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EventTypeCustomInputOrderByWithRelationInput>;

    @Field(() => EventTypeCustomInputWhereUniqueInput, {nullable:true})
    cursor?: EventTypeCustomInputWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EventTypeCustomInputScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EventTypeCustomInputScalarFieldEnum>;
}
