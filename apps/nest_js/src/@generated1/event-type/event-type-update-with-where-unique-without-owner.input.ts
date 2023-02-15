import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { Type } from 'class-transformer';
import { EventTypeUpdateWithoutOwnerInput } from './event-type-update-without-owner.input';

@InputType()
export class EventTypeUpdateWithWhereUniqueWithoutOwnerInput {

    @Field(() => EventTypeWhereUniqueInput, {nullable:false})
    @Type(() => EventTypeWhereUniqueInput)
    where!: EventTypeWhereUniqueInput;

    @Field(() => EventTypeUpdateWithoutOwnerInput, {nullable:false})
    @Type(() => EventTypeUpdateWithoutOwnerInput)
    data!: EventTypeUpdateWithoutOwnerInput;
}
