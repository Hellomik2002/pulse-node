import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCustomInputWhereUniqueInput } from './event-type-custom-input-where-unique.input';
import { Type } from 'class-transformer';
import { EventTypeCustomInputUpdateWithoutEventTypeInput } from './event-type-custom-input-update-without-event-type.input';

@InputType()
export class EventTypeCustomInputUpdateWithWhereUniqueWithoutEventTypeInput {

    @Field(() => EventTypeCustomInputWhereUniqueInput, {nullable:false})
    @Type(() => EventTypeCustomInputWhereUniqueInput)
    where!: EventTypeCustomInputWhereUniqueInput;

    @Field(() => EventTypeCustomInputUpdateWithoutEventTypeInput, {nullable:false})
    @Type(() => EventTypeCustomInputUpdateWithoutEventTypeInput)
    data!: EventTypeCustomInputUpdateWithoutEventTypeInput;
}
