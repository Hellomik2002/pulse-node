import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCustomInputCreateManyEventTypeInput } from './event-type-custom-input-create-many-event-type.input';
import { Type } from 'class-transformer';

@InputType()
export class EventTypeCustomInputCreateManyEventTypeInputEnvelope {

    @Field(() => [EventTypeCustomInputCreateManyEventTypeInput], {nullable:false})
    @Type(() => EventTypeCustomInputCreateManyEventTypeInput)
    data!: Array<EventTypeCustomInputCreateManyEventTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
