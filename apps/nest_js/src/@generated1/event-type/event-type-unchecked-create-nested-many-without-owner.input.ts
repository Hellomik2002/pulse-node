import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateWithoutOwnerInput } from './event-type-create-without-owner.input';
import { Type } from 'class-transformer';
import { EventTypeCreateOrConnectWithoutOwnerInput } from './event-type-create-or-connect-without-owner.input';
import { EventTypeCreateManyOwnerInputEnvelope } from './event-type-create-many-owner-input-envelope.input';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';

@InputType()
export class EventTypeUncheckedCreateNestedManyWithoutOwnerInput {

    @Field(() => [EventTypeCreateWithoutOwnerInput], {nullable:true})
    @Type(() => EventTypeCreateWithoutOwnerInput)
    create?: Array<EventTypeCreateWithoutOwnerInput>;

    @Field(() => [EventTypeCreateOrConnectWithoutOwnerInput], {nullable:true})
    @Type(() => EventTypeCreateOrConnectWithoutOwnerInput)
    connectOrCreate?: Array<EventTypeCreateOrConnectWithoutOwnerInput>;

    @Field(() => EventTypeCreateManyOwnerInputEnvelope, {nullable:true})
    @Type(() => EventTypeCreateManyOwnerInputEnvelope)
    createMany?: EventTypeCreateManyOwnerInputEnvelope;

    @Field(() => [EventTypeWhereUniqueInput], {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    connect?: Array<EventTypeWhereUniqueInput>;
}
