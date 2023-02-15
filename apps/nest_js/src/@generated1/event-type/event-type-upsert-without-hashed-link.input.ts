import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeUpdateWithoutHashedLinkInput } from './event-type-update-without-hashed-link.input';
import { Type } from 'class-transformer';
import { EventTypeCreateWithoutHashedLinkInput } from './event-type-create-without-hashed-link.input';

@InputType()
export class EventTypeUpsertWithoutHashedLinkInput {

    @Field(() => EventTypeUpdateWithoutHashedLinkInput, {nullable:false})
    @Type(() => EventTypeUpdateWithoutHashedLinkInput)
    update!: EventTypeUpdateWithoutHashedLinkInput;

    @Field(() => EventTypeCreateWithoutHashedLinkInput, {nullable:false})
    @Type(() => EventTypeCreateWithoutHashedLinkInput)
    create!: EventTypeCreateWithoutHashedLinkInput;
}
