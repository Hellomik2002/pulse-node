import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCustomInputCreateWithoutEventTypeInput } from './event-type-custom-input-create-without-event-type.input';
import { Type } from 'class-transformer';
import { EventTypeCustomInputCreateOrConnectWithoutEventTypeInput } from './event-type-custom-input-create-or-connect-without-event-type.input';
import { EventTypeCustomInputCreateManyEventTypeInputEnvelope } from './event-type-custom-input-create-many-event-type-input-envelope.input';
import { EventTypeCustomInputWhereUniqueInput } from './event-type-custom-input-where-unique.input';

@InputType()
export class EventTypeCustomInputCreateNestedManyWithoutEventTypeInput {

    @Field(() => [EventTypeCustomInputCreateWithoutEventTypeInput], {nullable:true})
    @Type(() => EventTypeCustomInputCreateWithoutEventTypeInput)
    create?: Array<EventTypeCustomInputCreateWithoutEventTypeInput>;

    @Field(() => [EventTypeCustomInputCreateOrConnectWithoutEventTypeInput], {nullable:true})
    @Type(() => EventTypeCustomInputCreateOrConnectWithoutEventTypeInput)
    connectOrCreate?: Array<EventTypeCustomInputCreateOrConnectWithoutEventTypeInput>;

    @Field(() => EventTypeCustomInputCreateManyEventTypeInputEnvelope, {nullable:true})
    @Type(() => EventTypeCustomInputCreateManyEventTypeInputEnvelope)
    createMany?: EventTypeCustomInputCreateManyEventTypeInputEnvelope;

    @Field(() => [EventTypeCustomInputWhereUniqueInput], {nullable:true})
    @Type(() => EventTypeCustomInputWhereUniqueInput)
    connect?: Array<EventTypeCustomInputWhereUniqueInput>;
}
