import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypeWhereInput } from './event-type-where.input';
import { Type } from 'class-transformer';
import { EventTypeOrderByWithRelationInput } from './event-type-order-by-with-relation.input';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EventTypeScalarFieldEnum } from './event-type-scalar-field.enum';

@ArgsType()
export class FindFirstEventTypeOrThrowArgs {

    @Field(() => EventTypeWhereInput, {nullable:true})
    @Type(() => EventTypeWhereInput)
    where?: EventTypeWhereInput;

    @Field(() => [EventTypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EventTypeOrderByWithRelationInput>;

    @Field(() => EventTypeWhereUniqueInput, {nullable:true})
    cursor?: EventTypeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EventTypeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EventTypeScalarFieldEnum>;
}
