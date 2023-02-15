import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCustomInputWhereUniqueInput } from './event-type-custom-input-where-unique.input';
import { Type } from 'class-transformer';
import { EventTypeCustomInputCreateWithoutEventTypeInput } from './event-type-custom-input-create-without-event-type.input';

@InputType()
export class EventTypeCustomInputCreateOrConnectWithoutEventTypeInput {

    @Field(() => EventTypeCustomInputWhereUniqueInput, {nullable:false})
    @Type(() => EventTypeCustomInputWhereUniqueInput)
    where!: EventTypeCustomInputWhereUniqueInput;

    @Field(() => EventTypeCustomInputCreateWithoutEventTypeInput, {nullable:false})
    @Type(() => EventTypeCustomInputCreateWithoutEventTypeInput)
    create!: EventTypeCustomInputCreateWithoutEventTypeInput;
}
