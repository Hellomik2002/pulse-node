import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypeCustomInputUpdateInput } from './event-type-custom-input-update.input';
import { Type } from 'class-transformer';
import { EventTypeCustomInputWhereUniqueInput } from './event-type-custom-input-where-unique.input';

@ArgsType()
export class UpdateOneEventTypeCustomInputArgs {

    @Field(() => EventTypeCustomInputUpdateInput, {nullable:false})
    @Type(() => EventTypeCustomInputUpdateInput)
    data!: EventTypeCustomInputUpdateInput;

    @Field(() => EventTypeCustomInputWhereUniqueInput, {nullable:false})
    @Type(() => EventTypeCustomInputWhereUniqueInput)
    where!: EventTypeCustomInputWhereUniqueInput;
}
