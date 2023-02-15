import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCustomInputWhereUniqueInput } from './event-type-custom-input-where-unique.input';
import { Type } from 'class-transformer';
import { EventTypeCustomInputUpdateWithoutEventTypeInput } from './event-type-custom-input-update-without-event-type.input';
import { EventTypeCustomInputCreateWithoutEventTypeInput } from './event-type-custom-input-create-without-event-type.input';

@InputType()
export class EventTypeCustomInputUpsertWithWhereUniqueWithoutEventTypeInput {

    @Field(() => EventTypeCustomInputWhereUniqueInput, {nullable:false})
    @Type(() => EventTypeCustomInputWhereUniqueInput)
    where!: EventTypeCustomInputWhereUniqueInput;

    @Field(() => EventTypeCustomInputUpdateWithoutEventTypeInput, {nullable:false})
    @Type(() => EventTypeCustomInputUpdateWithoutEventTypeInput)
    update!: EventTypeCustomInputUpdateWithoutEventTypeInput;

    @Field(() => EventTypeCustomInputCreateWithoutEventTypeInput, {nullable:false})
    @Type(() => EventTypeCustomInputCreateWithoutEventTypeInput)
    create!: EventTypeCustomInputCreateWithoutEventTypeInput;
}
