import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { Type } from 'class-transformer';
import { EventTypeCreateWithoutOwnerInput } from './event-type-create-without-owner.input';

@InputType()
export class EventTypeCreateOrConnectWithoutOwnerInput {

    @Field(() => EventTypeWhereUniqueInput, {nullable:false})
    @Type(() => EventTypeWhereUniqueInput)
    where!: EventTypeWhereUniqueInput;

    @Field(() => EventTypeCreateWithoutOwnerInput, {nullable:false})
    @Type(() => EventTypeCreateWithoutOwnerInput)
    create!: EventTypeCreateWithoutOwnerInput;
}
