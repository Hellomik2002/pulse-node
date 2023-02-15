import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HashedLinkUpdateWithoutEventTypeInput } from './hashed-link-update-without-event-type.input';
import { Type } from 'class-transformer';
import { HashedLinkCreateWithoutEventTypeInput } from './hashed-link-create-without-event-type.input';

@InputType()
export class HashedLinkUpsertWithoutEventTypeInput {

    @Field(() => HashedLinkUpdateWithoutEventTypeInput, {nullable:false})
    @Type(() => HashedLinkUpdateWithoutEventTypeInput)
    update!: HashedLinkUpdateWithoutEventTypeInput;

    @Field(() => HashedLinkCreateWithoutEventTypeInput, {nullable:false})
    @Type(() => HashedLinkCreateWithoutEventTypeInput)
    create!: HashedLinkCreateWithoutEventTypeInput;
}
