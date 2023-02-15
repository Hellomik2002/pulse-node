import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { Type } from 'class-transformer';
import { EventTypeCreateInput } from './event-type-create.input';
import { EventTypeUpdateInput } from './event-type-update.input';

@ArgsType()
export class UpsertOneEventTypeArgs {

    @Field(() => EventTypeWhereUniqueInput, {nullable:false})
    @Type(() => EventTypeWhereUniqueInput)
    where!: EventTypeWhereUniqueInput;

    @Field(() => EventTypeCreateInput, {nullable:false})
    @Type(() => EventTypeCreateInput)
    create!: EventTypeCreateInput;

    @Field(() => EventTypeUpdateInput, {nullable:false})
    @Type(() => EventTypeUpdateInput)
    update!: EventTypeUpdateInput;
}
