import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypeCustomInputWhereUniqueInput } from './event-type-custom-input-where-unique.input';
import { Type } from 'class-transformer';
import { EventTypeCustomInputCreateInput } from './event-type-custom-input-create.input';
import { EventTypeCustomInputUpdateInput } from './event-type-custom-input-update.input';

@ArgsType()
export class UpsertOneEventTypeCustomInputArgs {

    @Field(() => EventTypeCustomInputWhereUniqueInput, {nullable:false})
    @Type(() => EventTypeCustomInputWhereUniqueInput)
    where!: EventTypeCustomInputWhereUniqueInput;

    @Field(() => EventTypeCustomInputCreateInput, {nullable:false})
    @Type(() => EventTypeCustomInputCreateInput)
    create!: EventTypeCustomInputCreateInput;

    @Field(() => EventTypeCustomInputUpdateInput, {nullable:false})
    @Type(() => EventTypeCustomInputUpdateInput)
    update!: EventTypeCustomInputUpdateInput;
}
