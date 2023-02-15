import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { Type } from 'class-transformer';
import { EventTypeCreateWithoutHashedLinkInput } from './event-type-create-without-hashed-link.input';

@InputType()
export class EventTypeCreateOrConnectWithoutHashedLinkInput {

    @Field(() => EventTypeWhereUniqueInput, {nullable:false})
    @Type(() => EventTypeWhereUniqueInput)
    where!: EventTypeWhereUniqueInput;

    @Field(() => EventTypeCreateWithoutHashedLinkInput, {nullable:false})
    @Type(() => EventTypeCreateWithoutHashedLinkInput)
    create!: EventTypeCreateWithoutHashedLinkInput;
}
