import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateManyOwnerInput } from './event-type-create-many-owner.input';
import { Type } from 'class-transformer';

@InputType()
export class EventTypeCreateManyOwnerInputEnvelope {

    @Field(() => [EventTypeCreateManyOwnerInput], {nullable:false})
    @Type(() => EventTypeCreateManyOwnerInput)
    data!: Array<EventTypeCreateManyOwnerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
