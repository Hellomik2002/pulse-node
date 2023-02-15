import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { Type } from 'class-transformer';
import { EventTypeUpdateWithoutOwnerInput } from './event-type-update-without-owner.input';
import { EventTypeCreateWithoutOwnerInput } from './event-type-create-without-owner.input';

@InputType()
export class EventTypeUpsertWithWhereUniqueWithoutOwnerInput {

    @Field(() => EventTypeWhereUniqueInput, {nullable:false})
    @Type(() => EventTypeWhereUniqueInput)
    where!: EventTypeWhereUniqueInput;

    @Field(() => EventTypeUpdateWithoutOwnerInput, {nullable:false})
    @Type(() => EventTypeUpdateWithoutOwnerInput)
    update!: EventTypeUpdateWithoutOwnerInput;

    @Field(() => EventTypeCreateWithoutOwnerInput, {nullable:false})
    @Type(() => EventTypeCreateWithoutOwnerInput)
    create!: EventTypeCreateWithoutOwnerInput;
}
