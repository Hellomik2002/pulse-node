import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateNestedOneWithoutHashedLinkInput } from '../event-type/event-type-create-nested-one-without-hashed-link.input';

@InputType()
export class HashedLinkCreateInput {

    @Field(() => String, {nullable:false})
    link!: string;

    @Field(() => EventTypeCreateNestedOneWithoutHashedLinkInput, {nullable:false})
    eventType!: EventTypeCreateNestedOneWithoutHashedLinkInput;
}
